const express = require('express');
const exchangeController = require('../controllers/exchange-controller');

const router = express.Router();

module.exports = (app) => {
    app.use('/exchange', router);

    router.get('/rates', exchangeController.getExchangeRates);
};
