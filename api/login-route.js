const express = require('express');
const {register, login} = require('../controllers/login');

const route = express.Router();

module.exports = (app) => {
    app.use('/auth', route);
    route.post('/register', register);
    route.post('/login', login);
}