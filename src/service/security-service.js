const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const ResponseError = require('../errors/response-error');

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

const changeUserPin = async (userId, oldPin, newPin) => {
    const user = await User.findById(userId);
    if (!user) throw new ResponseError(404, 'User not found!');
    if (user.isFrozen) throw new ResponseError(403, 'Akun sedang dibekukan. Tidak bisa mengganti PIN.');

    const isMatch = await bcrypt.compare(oldPin, user.pin);
    if (!isMatch) {
        user.failedPinAttempts = (user.failedPinAttempts || 0) + 1;
        
        if (user.failedPinAttempts >= 3) {
            user.isFrozen = true; 
            await user.save();
            throw new ResponseError(403, 'PIN Salah 3x, Akun Otomatis Dibekukan.');
        }
        
        await user.save();
        throw new ResponseError(401, `PIN Lama Salah! Sisa percobaan: ${3 - user.failedPinAttempts}`);
    }

    user.failedPinAttempts = 0; 
    const salt = await bcrypt.genSalt(12);
    user.pin = await bcrypt.hash(newPin, salt);
    await user.save();

    return user;
};

const verifyUserPin = async (userId, inputPin) => {
    const user = await User.findById(userId);
    if (!user) throw new ResponseError(404, 'User not found!');
    if (user.isFrozen) throw new ResponseError(403, 'Akun sedang dibekukan.');

    const isMatch = await bcrypt.compare(inputPin, user.pin);
    if (!isMatch) {
        user.failedPinAttempts = (user.failedPinAttempts || 0) + 1;
        if (user.failedPinAttempts >= 3) {
            user.isFrozen = true;
            await user.save();
            throw new ResponseError(403, 'Akun Otomatis Dibekukan : 3x salah PIN.');
        }
        await user.save();
        throw new ResponseError(401, `PIN Salah! Sisa percobaan: ${3 - user.failedPinAttempts}`);
    }

    user.failedPinAttempts = 0;
    await user.save();
    return true;
};

module.exports = {
    setupUserPin,
    freezeUserAccount,
    changeUserPin,
    verifyUserPin

};