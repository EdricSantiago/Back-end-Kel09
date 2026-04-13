const transactionRepository = require('../repository/transaction-repository');
const responseError = require('../errors/response-error');
const Account = require('../models/accountModel');

const transfer = async (senderAccountId, receiverAccountId, amount) => {
    if (amount < 100) throw new responseError(400, 'Minimal transfer Rp 100');

    const sender = await transactionRepository.findAccountById(senderAccountId);
    if (!sender) throw new responseError(404, 'Akun pengirim tidak ditemukan');

    const receiver = await transactionRepository.findAccountById(receiverAccountId);
    if (!receiver) throw new responseError(404, 'Akun penerima tidak ditemukan');

    if (sender.balance < amount) throw new responseError(400, 'Saldo tidak cukup');

    await Account.findByIdAndUpdate(senderAccountId, { balance: sender.balance - amount });
    await Account.findByIdAndUpdate(receiverAccountId, { balance: receiver.balance + amount });

    return await transactionRepository.saveTransaction({
        type: 'transfer',
        amount,
        senderId: senderAccountId,
        receiverId: receiverAccountId,
        status: 'success'
    });
};

const deposit = async (accountId, amount) => {
    if (amount < 100) throw new responseError(400, 'Minimal deposit Rp 100');

    const account = await transactionRepository.findAccountById(accountId);
    if (!account) throw new responseError(404, 'Akun tidak ditemukan');

    await Account.findByIdAndUpdate(accountId, { balance: account.balance + amount });

    return await transactionRepository.saveTransaction({
        type: 'setor',
        amount,
        receiverId: accountId,
        status: 'success'
    });
};

const withdraw = async (accountId, amount) => {
    if (amount < 100) throw new responseError(400, 'Minimal tarik Rp 100');

    const account = await transactionRepository.findAccountById(accountId);
    if (!account) throw new responseError(404, 'Akun tidak ditemukan');

    if (account.balance < amount) throw new responseError(400, 'Saldo tidak cukup');
    if (account.balance - amount < 50000) throw new responseError(400, 'Transaksi ditolak. Saldo rekening tidak boleh kurang dari Rp 50.000 setelah penarikan.');

    await Account.findByIdAndUpdate(accountId, { balance: account.balance - amount });

    return await transactionRepository.saveTransaction({
        type: 'tarik',
        amount,
        senderId: accountId,
        status: 'success'
    });
};

const getHistory = async (accountId) => {
    const account = await transactionRepository.findAccountById(accountId);
    if (!account) throw new responseError(404, 'Akun tidak ditemukan');

    return await transactionRepository.getTransactionsByAccountId(accountId);
};

module.exports = {
    transfer,
    deposit, 
    withdraw, 
    getHistory 
};