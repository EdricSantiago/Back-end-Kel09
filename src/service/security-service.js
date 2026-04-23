const bcrypt = require('bcrypt');
const User = require('../models/userModel'); 

const setupUserPin = async (userId, pin) => {
    
    const salt = await bcrypt.genSalt(12);
    const hashedPin = await bcrypt.hash(pin, salt);

    const updatedUser = await User.findByIdAndUpdate(
        userId, 
        { pin: hashedPin }, 
        { new: true }
    );

    if (!updatedUser) {
        const error = new Error('User not found!');
        error.statusCode = 404;
        throw error;
    }

    return updatedUser;
};

const freezeUserAccount = async (userId) => {
    const updatedUser = await User.findByIdAndUpdate(
        userId, 
        { isFrozen: true }, 
        { new: true }
    );

    if (!updatedUser) {
        const error = new Error('User not found!');
        error.statusCode = 404;
        throw error;
    }

    return updatedUser;
};

module.exports = {
    setupUserPin,
    freezeUserAccount
};