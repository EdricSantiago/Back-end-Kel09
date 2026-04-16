const validasiPinjaman = (req, res, next) => {
    const { jumlah_pinjaman, kredit_skor, username } = req.body;

    if (!jumlah_pinjaman || !kredit_skor || !username) {
        return res.status(400).json({
            statusCode: 400,
            message: 'jumlah_pinjaman, kredit_skor, dan username wajib diisi!'
        });
    }

    if (typeof jumlah_pinjaman !== 'number' || jumlah_pinjaman <= 0) {
        return res.status(400).json({
            statusCode: 400,
            message: 'jumlah_pinjaman harus berupa angka positif'
        });
    }

    if (typeof kredit_skor !== 'number' || kredit_skor < 700 || kredit_skor > 850) {
        return res.status(400).json({
            statusCode: 400,
            message: 'Kredit skor harus antara 700 hingga 850'
        });
    }

    if (typeof username !== 'string' || username.trim() === '') {
        return res.status(400).json({
            statusCode: 400,
            message: 'Username tidak valid'
        });
    }

    next();
};

module.exports = { validasiPinjaman };