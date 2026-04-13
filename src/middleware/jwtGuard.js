const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const jwtGuard = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    // 1. Better Header Check
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            statusCode: 401,
            error: 'UNAUTHORIZED',
            message: 'Akses ditolak. Silahkan login terlebih dahulu.'
        });
    }

    // 2. Safer Token Extraction
    const parts = authHeader.split(' ');
    const token = parts.length === 2 ? parts[1] : null;

    if (!token) {
        return res.status(401).json({ message: "Format token salah." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: "User tidak ditemukan." });
        }

        // 3. Compare Password Change Time
        if (user.passwordChangedAt) {
            const changedTimestamp = parseInt(user.passwordChangedAt.getTime() / 1000, 10);
            if (changedTimestamp > decoded.iat) { 
                return res.status(401).json({ 
                    message: "Password telah diubah. Silahkan login kembali." 
                });
            }
        }

        req.user = decoded;
        next(); // THIS is where the 'next is not a function' error lived if args were wrong
    } catch (err) {
        return res.status(401).json({
            statusCode: 401,
            error: 'UNAUTHORIZED',
            message: 'Sesi anda telah berakhir atau token tidak valid.'
        });
    }
};

module.exports = jwtGuard;
