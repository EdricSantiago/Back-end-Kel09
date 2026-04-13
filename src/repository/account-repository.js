const Account = require('../models/accountModel');
const mongoose = require('mongoose');
const responseError = require('../errors/response-error'); 
const { v4: uuid } = require('uuid');

const findAll = async () => {
    const account = await Account.find();
    return account;
};

const findById = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new responseError(400, 'Invalid account ID');
    }
    const account = await Account.findById(id);
    return account;
};

const create = async (data) => {
    const account = new Account({
        accountNumber:
            uuid(),
        balance:
            data.balance,
        userId:
            data.userId
    });
    await account.save();
    return account;
};

const update = async (id, data) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new responseError(400, 'Invalid account ID');
    }
    const account = await Account.findByIdAndUpdate(id,
            {balance: data.balance},
            {new: true}
        );
    return account;
};

const deleteAccounts = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new responseError(400, 'Invalid account ID');
    }
    const account = await Account.findByIdAndDelete(id);
    return account
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteAccounts
};