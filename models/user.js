const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    accountNumber: { type: String, required: true },
    balance: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);