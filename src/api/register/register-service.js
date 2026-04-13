const bcrypt = require('bcrypt');
const registerRepository = require('./register-repository');

const registerUser = async (username, password) => {
    if (!username || !password) {
        const error = new Error('Username dan Password wajib terisi!');
        error.statusCode = 400;
        throw error;
    }

    const existingUser = await registerRepository.findByUsername(username);
    if (existingUser) {
        const error = new Error('Username sudah terambil');
        error.statusCode = 400;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await registerRepository.createUser(username, hashedPassword);

    const { password: _, ...userWithoutPassword } = newUser.toObject();
    return userWithoutPassword;
};

module.exports = { registerUser };