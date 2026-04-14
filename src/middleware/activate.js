const User = require('../models/userModel');
const ResponseError = require('../errors/response-error');

const activate = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        
        if (!user) {
            throw new ResponseError(404, "User Tidak Ditemukan.");
        }

        if (user.isFrozen) {
            throw new ResponseError(403, "Demi Keamanan Anda, Saat Ini Akun Sedang Dibekukan. Mohon Hubungi Customer Service Untuk Ditindaklanjuti.");
        }

        next(); 
    } catch (err) {
        next(err); 
    }
};

module.exports = activate;