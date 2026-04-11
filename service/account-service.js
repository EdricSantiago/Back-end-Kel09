const Account = require('../models/accountModel');
const { v4: uuid } = require('uuid')

async function getAllAccounts() {
    const account = await Account.find();
    if (!account) {
        throw new Error("account is not found");
    }
    return account;
}

const getAccountsById = async (id) => {
    const account = await Account.findById(id);
    if (!account) {
        throw new Error("account is not found");
    }
    return account;
};

const createAccounts = async (data) => {
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

const updateAccounts = async (id, data) => {
    const account = await Account.findByIdAndUpdate(id,
        {balance: data.balance},
        {new: true}
    );
    if (!account) {
        throw new Error("account is not found");
    }
    return account;
};

const deleteAccounts = async (id) => {
    const account = await Account.findByIdAndDelete(id);
    if (!account) {
        throw new Error("account is not found");
    }
    return account;
};

module.exports = {
    getAllAccounts,
    getAccountsById,
    createAccounts,
    updateAccounts,
    deleteAccounts
};
