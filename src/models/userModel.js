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
    },
    pin:    {
        type: String,
        default : null,
        select: false
    },
    isFrozen: {
        type: Boolean,
        default: false
    },
    alamat: {
        type: String,
        required: true
    },
    umur: {
        type:Number,
        required: true
    },
    tgl_lahir:{
        type: Date,
        required : true
    },
    failedPinAttempts: { 
        type: Number, 
        default: 0 
    },
}, { 
    timestamps: true 
});


userSchema.pre('save', async function() {
    if (!this.isModified('password') || this.isNew) return;
    this.passwordChangedAt = Date.now() - 1000;
});

module.exports = mongoose.model("User", userSchema );
