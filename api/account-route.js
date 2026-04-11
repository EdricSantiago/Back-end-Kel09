const express = require('express');
const Account = require('../models/accountModel');

const route = express.Router();

module.exports = (app) => {
    app.use('/accounts', route);

    // retrieve all accounts data
    route.get('/', async (request, response) => {
        const account = await Account.find();
        return response.status(200).json(account);
    });

    // retrieve account data via ID
    route.get('/:id', async (request, response) => { 
        const id = request.params.id;
        const account = await Account.findById(id);
        return response.status(200).json(account);
    });

    // create new account data
    route.post('/', async (request, response) => { 
        const account = new Account({
            accountNumber: 
                request.body.accountNumber,
            balance: 
                request.body.balance,
            userId: 
                request.body.userId
        })
        await account.save();
        return response.status(200).json(account);
    });

    // update account data via ID
    route.put('/:id', async (request, response) => { 
        const id = request.params.id;
        const account = await Account.findByIdAndUpdate(id, 
            {balance : request.body.balance},
            {new: true}
        );
        return response.status(200).json(account);
    });

    // delete account data via ID
    route.delete('/:id', async (request, response) => {
        const id = request.params.id;
        const account = await Account.findByIdAndDelete(id);
        return response.status(200).json(account);
    });
}