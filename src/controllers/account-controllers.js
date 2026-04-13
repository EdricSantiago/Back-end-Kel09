const accountService = require('../service/account-service');
const {successResponse} = require('../utils/response');

const getAllAccounts = async (req, res, next) => {
    try{
        const account = await accountService.getAllAccounts();

        return successResponse(res, 200, 'Account retrieved', account);
    }catch(err){
        return next(err);
    }
};

const getAccountsById = async (req, res, next) => {
    try{
        const {id} = req.params;

        const account = await accountService.getAccountsById(id);

        return successResponse(res, 200, 'Account retrieved', account);
    }catch(err){
        return next(err);
    };
};

const createAccounts = async (req, res, next) => {
    try {
        const { error } = createAccountSchema.validate(req.body);
        if (error) {
            error.statusCode = 400;
            return next(error);
        }
        const accountData = {
            ...req.body,
            userId: req.user.id
        };
        const newAccounts = await accountService.createAccounts(accountData);
        return successResponse(res, 201, 'Account created', newAccounts);
    } catch (err) {
        return next(err);
    };
};


const updateAccounts = async (req, res, next) => {
    try{
        const {id} = req.params;
        
        const updateAccounts = await accountService.updateAccounts(id, req.body);

        return successResponse(res, 200, 'Account updated', updateAccounts);
    }catch(err){
        return next(err);
    };
};

const deleteAccounts = async (req, res, next) => {
    try{
        const {id} = req.params;

        const deleteAccounts = await accountService.deleteAccounts(id);

        return successResponse(res, 200, 'Account deleted', deleteAccounts);
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