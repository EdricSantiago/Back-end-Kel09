const express = require('express');
const login = require('../login-route');
const register = require('../register-route');

const router = express.Router();

login(router);
register(router);

module.exports = router;