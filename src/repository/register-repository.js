const User = require('../models/userModel');

const findByUsername = async (username) => {
    return await User.findOne({ username });
};

const createUser = async (username, hashedPassword) => {
    return await User.create({ username, password: hashedPassword });
};

module.exports = { findByUsername, createUser };