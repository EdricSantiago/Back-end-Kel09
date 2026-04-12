const transactionService = require('./transaction-service');

const transfer = async (req, res, next) => {
    try {
        const { senderAccountId, receiverAccountId, amount } = req.body;
        const result = await transactionService.transfer(senderAccountId, receiverAccountId, amount);
        res.status(201).json({ message: 'Transfer berhasil', data: result });
    } catch (err) {
        next(err);
    }
};

const deposit = async (req, res, next) => {
    try {
        const { accountId, amount } = req.body;
        const result = await transactionService.deposit(accountId, amount);
        res.status(201).json({ message: 'Deposit berhasil', data: result });
    } catch (err) {
        next(err);
    }
};

const withdraw = async (req, res, next) => {
    try {
        const { accountId, amount } = req.body;
        const result = await transactionService.withdraw(accountId, amount);
        res.status(201).json({ message: 'Penarikan berhasil', data: result });
    } catch (err) {
        next(err);
    }
};

const getHistory = async (req, res, next) => {
    try {
        const { accountId } = req.params;
        const result = await transactionService.getHistory(accountId);
        res.status(200).json({ 
            message: 'Riwayat transaksi', data: result 
        });
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