const Transaction = require('../models/transactionModel');
const Account = require('../models/accountModel');

const findAccountById = async (id) => {
    return await Account.findById(id);
};

const saveTransaction = async (data) => {
    return await Transaction.create(data);
};

const getTransactionsByAccountId = async (accountId) => {
    return await Transaction.find({
        $or: [{ senderId: accountId }, { receiverId: accountId }]
    }).sort({ createdAt: -1 });
};

module.exports = {
    findAccountById, 
    saveTransaction, 
    getTransactionsByAccountId 
};