const accountService = require('../service/account-service');

const getAllAccounts = async (req, res, next) => {
    try{
        const account = await accountService.getAllAccounts();

        return res.status(200).json(account);
    }catch(err){
        return next(err);
    }
};

const getAccountsById = async (req, res, next) => {
    try{
        const {id} = req.params;

        const account = await accountService.getAccountsById(id);

        return res.status(200).json(account);
    }catch(err){
        return next(err);
    };
};

const createAccounts = async (req, res, next) => {
    try{
        const newAccounts = await accountService.createAccounts(req.body);
        return res.status(201).json(newAccounts);
    }catch(err){
        return next(err);
    };
};

const updateAccounts = async (req, res, next) => {
    try{
        const {id} = req.params;

        const updateAccounts = await accountService.updateAccounts(id, req.body);

        return res.status(200).json(updateAccounts);
    }catch(err){
        return next(err);
    };
};

const deleteAccounts = async (req, res, next) => {
    try{
        const {id} = req.params;

        const deleteAccounts = await accountService.deleteAccounts(id);

        return res.status(200).json(deleteAccounts);
    }catch(err){
        return next(err);
    }
};

module.exports = {
    getAllAccounts,
    getAccountsById,
    createAccounts,
    updateAccounts,
    deleteAccounts
};