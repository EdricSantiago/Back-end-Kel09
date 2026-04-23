const express = require('express');
const { setupPin, freezeAccount, changePin, getSecurityStatus ,verifyPin } = require('../controllers/security-controller'); 

const route = express.Router();

module.exports = (app) => {
    app.use('/security', route);

    route.post('/setup-pin', setupPin);
    route.patch('/panic', freezeAccount);
    route.put('/change-pin', changePin);
    route.get('/status', getSecurityStatus);
    route.post('/verify-pin', verifyPin); 
};