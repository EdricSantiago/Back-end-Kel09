const express = require('express');
const {transfer, deposit, withdraw, getHistory} = require('../controllers/transaction-controller');
const activate = require('../middleware/activate');

const route = express.Router();

module.exports = (app) => {
    app.use('/transactions', route);

    route.post('/transfer', activate, transfer);
    route.post('/deposit', deposit);
    route.post('/withdraw',activate , withdraw);
    route.get('/history/:accountId', getHistory);
};