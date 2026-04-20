const User = require('../models/userModel');

const findByUsername = async (username) => {
    return await User.findOne({ username });
};

const createUser = async (username, hashedPassword, alamat,umur,tgl_lahir) => {
    return await User.create({ username, password: hashedPassword, alamat, umur, tgl_lahir });
};

module.exports = { findByUsername, createUser };