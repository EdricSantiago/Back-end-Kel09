const express = require('express');
const authRouter = require('./auth/auth-router');
const jwtGuard = require('../middleware/jwtGuard');
const users = require('./users-route');
const account = require('./account-route');
const transaction = require('./transaction-route');
const security = require('./security-route');
const pinjaman = require('./pinjaman-route');

module.exports = () => {
  const app = express.Router();

  app.use('/auth', authRouter);
  app.use(jwtGuard);

    users(app);
    account(app);
    transaction(app);
    security(app);
    pinjaman(app);
    
    return app;
}