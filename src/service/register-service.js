const bcrypt = require('bcrypt');
const registerRepository = require('../repository/register-repository');

const registerUser = async (username, password, alamat, umur, tgl_lahir) => {
    if (!username || !password|| !alamat||!umur||!tgl_lahir) {
        const error = new Error('Semua Bagian harus terisi lengkap(username,password,alamat,umur,tanggal lahir)!');
        error.statusCode = 400;
        throw error;
    }
    if (umur<17) {
        const error = new Error('Maaf akun anda tidak bisa dibuat karena anda dibawah umur')
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
    const newUser = await registerRepository.createUser(username, hashedPassword,alamat,umur,tgl_lahir);

    const { password: _, ...userWithoutPassword } = newUser.toObject();
    return userWithoutPassword;
};

module.exports = { registerUser };