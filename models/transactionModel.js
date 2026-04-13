const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    type: { 
        type: String, 
        enum: ['setor', 'tarik', 'transfer'], 
        required: true 
    },

    amount: { 
        type: Number, 
        required: true,
        min: [100, 'Nominal transaksi minimal Rp 100']
    },

    senderId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        default: null 
    },

    receiverId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        default: null 
    },

    status: {
        type: String,
        enum: ['success', 'failed', 'pending'],
        default: 'success'
    },

}, { 
    timestamps: true 
});

module.exports = mongoose.model('Transaction', transactionSchema);