const express = require('express');
const accountController = require('../controllers/account-controllers');

const route = express.Router();

module.exports = (app) => {
    app.use('/accounts', route);

    // retrieve all accounts data
    route.get('/', accountController.getAllAccounts);

    // retrieve account data via ID
    route.get('/:id', accountController.getAccountsById); 

    // create new account data
    route.post('/', accountController.createAccounts);

    // update account data via ID
    route.patch('/:id', accountController.updateAccounts);

    // delete account data via ID
    route.delete('/:id', accountController.deleteAccounts);
}