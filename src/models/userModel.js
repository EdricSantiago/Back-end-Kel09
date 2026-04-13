const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    passwordChangedAt: { 
        type: Date 
    }
});

userSchema.pre('save', async function() {
    if (!this.isModified('password') || this.isNew) return;
    this.passwordChangedAt = Date.now() - 1000;
});

module.exports = mongoose.model("User", userSchema);
