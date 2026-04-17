const pinjamanService = require('../service/pinjaman-service');
const {successResponse} = require('../utils/response');

const ajukanPinjaman = async (req,res,next) => {
    try {
        const {jumlah_pinjaman,kredit_skor,username} = req.body;
        const userId = req.user.id; 
        const pinjol = await pinjamanService.ajukanPinjaman(userId, jumlah_pinjaman, kredit_skor, username);
        return successResponse(res, 201, 'Pinjaman berhasil diajukan', pinjol);
    } catch (err) {
        next(err);
    }
};

const getStatusPinjaman = async (req,res,next) => {
    try {
        const userId = req.user.id; 
        const pinjols = await pinjamanService.getPinjamanByUser(userId);
        return successResponse(res, 200, 'Data pinjaman berhasil diambil', pinjols);
    } catch (err) {
        next(err);
    }
};

module.exports = {ajukanPinjaman, getStatusPinjaman};