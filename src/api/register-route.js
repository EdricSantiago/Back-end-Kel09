const express = require('express');
const {register} = require('../controllers/register-controller');

const route = express.Router();

module.exports = (app) => {
    app.post('/register',register);
};