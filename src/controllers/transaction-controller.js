const transactionService = require('../service/transaction-service');
const {successResponse} = require('../utils/response');

const transfer = async (req, res, next) => {
    try {
        const { senderAccountId, receiverAccountId, amount } = req.body;
        const result = await transactionService.transfer(senderAccountId, receiverAccountId, amount);
        return successResponse(res, 201, 'Transfer berhasil.',result);
    } catch (err) {
        next(err);
    }
};

const deposit = async (req, res, next) => {
    try {
        const { accountId, amount } = req.body;
        const result = await transactionService.deposit(accountId, amount);
        return successResponse(res, 201, 'Deposit berhasil.',result);
    } catch (err) {
        next(err);
    }
};

const withdraw = async (req, res, next) => {
    try {
        const { accountId, amount } = req.body;
        const result = await transactionService.withdraw(accountId, amount);
        return successResponse(res, 201, 'Penarikan berhasil.',result);
    } catch (err) {
        next(err);
    }
};

const getHistory = async (req, res, next) => {
    try {
        const { accountId } = req.params;
        const result = await transactionService.getHistory(accountId);
        return successResponse(res, 200, 'Riwayat Transaksi',result);
    } catch (err) {
        next(err);
    }
};

module.exports = { 
    transfer, 
    deposit, 
    withdraw, 
    getHistory 
};