const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginRepository = require('../repository/login-repository');

const loginUser = async (username, password) => {
    const user = await loginRepository.findByUsername(username);
    if (!user) {
        const error = new Error('User tidak ditemukan');
        error.statusCode = 404;
        throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        const error = new Error('Password salah');
        error.statusCode = 401;
        throw error;
    }

    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );

    const { password: _, ...userWithoutPassword } = user.toObject();
    return { user: userWithoutPassword, token };
};

module.exports = { loginUser };