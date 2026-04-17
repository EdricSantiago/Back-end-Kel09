const pinjamanRepository = require('../repository/pinjaman-repository');
const Account = require('../models/accountModel');
const MIN_KREDIT_SKOR = 700;
const MAX_KREDIT_SKOR = 850;
const BUNGA_PER_TAHUN = 10; 

const hitungTenor = (jumlah) => {
    if (jumlah <= 5000000) return 6;        
    if (jumlah <= 20000000) return 12;      
    if (jumlah <= 50000000) return 24;     
    return 36;                              
};

const hitungCicilan = (jumlah, tenor, bunga) => {
    const bungaPerBulan = bunga / 100 / 12;
    const totalBunga = jumlah * bungaPerBulan * tenor;
    return Math.round((jumlah + totalBunga) / tenor);
};

const ajukanPinjaman = async (userId, jumlah_pinjaman, kredit_skor, username) => {
    if (kredit_skor < MIN_KREDIT_SKOR || kredit_skor > MAX_KREDIT_SKOR) {
        const error = new Error(`Kredit skor anda terlalu rendah,tidak dapat melakukan pinjaman`);
        error.statusCode = 400;
        throw error;
    }

const account = await Account.findOne({ userId });
    if (!account) {
        const error = new Error('Akun tidak ditemukan');
        error.statusCode = 404;
        throw error;
    }

    const tenor = hitungTenor(jumlah_pinjaman);

    const tanggal_jatuh_tempo = new Date();
    tanggal_jatuh_tempo.setMonth(tanggal_jatuh_tempo.getMonth() + tenor);

    const cicilan_per_bulan = hitungCicilan(jumlah_pinjaman, tenor, BUNGA_PER_TAHUN);

    const loan = await pinjamanRepository.createPinjaman({
        user: userId,
        accountNumber:account.accountNumber,
        username,
        jumlah_pinjaman,
        tenor,
        bunga: BUNGA_PER_TAHUN,
        kredit_skor,
        status: 'approved',
        tanggal_jatuh_tempo,
        cicilan_per_bulan
    });

    return loan;
};

const getPinjamanByUser = async (userId) => {
    const loans = await pinjamanRepository.findPinjamanByUserId(userId);

    if (!loans || loans.length === 0) {
        const error = new Error('Belum ada pinjaman');
        error.statusCode = 404;
        throw error;
    }

    return loans.map(loan => ({
        id: loan._id,
        username: loan.username,
        jumlah_pinjaman: loan.jumlah_pinjaman,
        tenor: `${loan.tenor} bulan`,
        bunga: `${loan.bunga}% per tahun`,
        cicilan_per_bulan: loan.cicilan_per_bulan,
        status: loan.status,
        tanggal_pengajuan: loan.tanggal_pengajuan,
        tanggal_jatuh_tempo: loan.tanggal_jatuh_tempo
    }));
};

module.exports = { ajukanPinjaman, getPinjamanByUser};