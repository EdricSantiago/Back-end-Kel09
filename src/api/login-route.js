const express = require('express');
const {login} = require('../controllers/login-controller');

const route = express.Router();

module.exports = (app) => {
    app.post('/login',login);
};