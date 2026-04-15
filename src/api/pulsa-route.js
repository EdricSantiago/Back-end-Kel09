const express = require('express');
const pulsaController = require('../controllers/pulsa-controller');

const router = express.Router();

module.exports = (app) => {
    app.use('/pulsa', router);
    router.post('/buy', pulsaController.buyPulsa);
};