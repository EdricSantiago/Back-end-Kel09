const securityService = require('../service/security-service');
const User = require('../models/userModel');
const { pinSchema } = require('../validation/security-validation');
const {successResponse} = require('../utils/response');
const ResponseError = require('../errors/response-error');

const setupPin = async (req, res, next) => {
    try {
        const { error } = pinSchema.validate(req.body);
        if (error) {
            throw new ResponseError(400, error.details[0].message);
        }

        await securityService.setupUserPin(req.user.id, req.body.pin);
        return successResponse(res, 200, 'PIN Berhasil Dibuat.');
    } catch (err) {
        next(err);
    }
};

const changePin = async (req, res, next) => {
    try {
        const { oldPin, newPin } = req.body;
        
        
        if (!oldPin || !newPin) throw new ResponseError(400, "PIN lama dan baru wajib diisi!");
        
        
        const { error } = pinSchema.validate({ pin: newPin });
        if (error) throw new ResponseError(400, "Format PIN salah: " + error.details[0].message);

        await securityService.changeUserPin(req.user.id, oldPin, newPin);
        return successResponse(res, 200, 'PIN Berhasil Diperbarui');
    } catch (err) {
        next(err);
    }
};

const freezeAccount = async (req, res, next) => {
    try {
        await securityService.freezeUserAccount(req.user.id);
        return successResponse(res, 200, 'Akun Dibekukan, Semua Transaksi Diblokir. Mohon Menghubungi Customer Service Untuk Mengaktifkan Akun Kembali.');
    } catch (err) {
        next(err);
    }
};

const getSecurityStatus = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) throw new ResponseError(404, "User tidak ditemukan.");

        const securityData = {
            isFrozen: user.isFrozen,
            hasPinSetup: !!user.pin,
            failedAttempts: user.failedPinAttempts || 0
        };

        return successResponse(res, 200, "Status Keamanan Akun Diperoleh", securityData);
    } catch (err) {
        next(err);
    }
};

const verifyPin = async (req, res, next) => {
    try {
        const { pin } = req.body;
        if (!pin) throw new ResponseError(400, "PIN Wajib Diisi!");

        await securityService.verifyUserPin(req.user.id, pin);
        return successResponse(res, 200, "Autentikasi Berhasil");
    } catch (err) {
        next(err);
    }
};
module.exports = { 
    setupPin, 
    freezeAccount,
    changePin ,
    getSecurityStatus ,
    verifyPin 
};