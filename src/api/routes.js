const express = require('express');
const authRouter = require('./auth/auth-router');
const jwtGuard = require('../middleware/jwtGuard');
const users = require('./users-route');
const account = require('./account-route');
const transaction = require('./transaction/transaction-route');

module.exports = () => {
    const app = express.Router();

    app.use('/auth', authRouter);
    app.use(jwtGuard);

    users(app);
    account(app);
    transaction(app);
    
    return app;
}