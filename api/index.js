const express = require('express');

const users = require('./users-route');

module.exports = () => {
    const app = express.Router();

    users(app);

    return app;
}