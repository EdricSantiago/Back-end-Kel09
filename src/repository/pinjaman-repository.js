const Pinjaman = require('../models/pinjamanModel')
const Account = require('../models/accountModel');

const createPinjaman = async (data) =>{
    return await Pinjaman.create(data);
};

const findPinjamanByAccountNumber = async (accountNumber) =>{
    return await Pinjaman.find({accountNumber});
};

const findPinjamanByUserId = async (userId) =>{
    return await Pinjaman.find({userId});
};

module.exports = {createPinjaman, findPinjamanByAccountNumber, findPinjamanByUserId};
