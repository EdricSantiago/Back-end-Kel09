const express = require('express');
const {ajukanPinjaman, getStatusPinjaman} = require('../controllers/pinjaman-controller');
const {validasiPinjaman} = require('../middleware/validasiPinjaman');

const route = express.Router();

module.exports = (app) => {
    app.post('/pinjaman', ajukanPinjaman);  
    app.get('/status', getStatusPinjaman);
};