const User = require('../models/userModel');

const updatePin = async (userId, hashedPin) => {
    return await User.findByIdAndUpdate(userId, { pin: hashedPin }, { new: true });
};

const freezeAccount = async (userId) => {
    return await User.findByIdAndUpdate(userId, { isFrozen: true }, { new: true });
};

module.exports = { 
    updatePin, 
    freezeAccount 
};