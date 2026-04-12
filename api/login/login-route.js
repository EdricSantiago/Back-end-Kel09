const express = require('express');
const {login} = require('./login-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/login', route);
    route.post('/', login);
};