const securityService = require('../service/security-service');
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

const freezeAccount = async (req, res, next) => {
    try {
        await securityService.freezeUserAccount(req.user.id);
        return successResponse(res, 200, 'Akun Dibekukan, Semua Transaksi Diblokir. Mohon Menghubungi Customer Service Untuk Mengaktifkan Akun Kembali.');
    } catch (err) {
        next(err);
    }
};

module.exports = { setupPin, freezeAccount };