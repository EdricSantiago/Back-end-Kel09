const express = require('express');
const login = require('./login-route');
const users = require('./users-route');
const account = require('./account-route');

module.exports = () => {
    const app = express.Router();

    login(app); 
    users(app);
    account(app);

    return app;
}