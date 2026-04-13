const express = require('express');
const {transfer, deposit, withdraw, getHistory} = require('../controllers/transaction-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/transactions', route);

    route.post('/transfer', transfer);
    route.post('/deposit', deposit);
    route.post('/withdraw', withdraw);
    route.get('/history/:accountId', getHistory);
};