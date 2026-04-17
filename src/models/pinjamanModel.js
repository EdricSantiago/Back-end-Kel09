const mongoose = require('mongoose');

const pinjamanSchema = new mongoose.Schema({
    jumlah_pinjaman:{
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    kredit_skor:{
        type: Number,
        required: true,
        min: 0,
        max: 850,
    },
    tenor :{
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum: ['pending','approved','rejected','lunas'],
        default: 'pending',
    },
    tanggal_pengajuan:{
        type: Date,
        default: Date.now
    },
    tanggal_jatuh_tempo:{
        type: Date,
    },
    cicilan_per_bulan:{
        type: Number
    }
},
    {
    timestamps:true
});

module.exports = mongoose.model('Pinjaman',pinjamanSchema);