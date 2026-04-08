const express = require('express');

const users = require('./users-route');
const account = require('./account-route');

module.exports = () => {
    const app = express.Router();

    users(app);
    account(app);

    return app;
}