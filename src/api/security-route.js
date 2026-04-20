const express = require('express');
const { setupPin, freezeAccount } = require('../controllers/security-controller'); 

const route = express.Router();

module.exports = (app) => {
    app.use('/security', route);

    route.post('/setup-pin', setupPin);
    route.patch('/panic', freezeAccount);
};