const express = require('express');
const Account = require('../models/account');

const route = express.Router();

module.exports = (app) => {
    app.use('/accounts', route);

    route.get('/', async (request, response) => {
        const account = await Account.find();
        return response.status(200).json(account);
    });

    route.get('/:id', async (request, response) => {
        const id = request.params.id;
        const account = await Account.findById(id);
        return response.status(200).json(account);
    })
}