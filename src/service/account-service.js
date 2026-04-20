const ResponseError = require('../errors/response-error');
const repository = require('../repository/account-repository');

async function getAllAccounts() {
    const account = await repository.findAll();
    return account;
};

const getAccountsById = async (id) => {
    const account = await repository.findById(id);
    if (!account) {
        throw new ResponseError(404, 'account is not found');
    }
    return account;
};

const createAccounts = async (data) => {
    const account = await repository.create(data);
    return account;
};

const updateAccounts = async (id, data) => {
    const account = await repository.update(id, data);
    if (!account) {
        throw new ResponseError(404, 'account is not found');
    }
    return account;
};

const deleteAccounts = async (id) => {
    const account = await repository.deleteAccounts(id);
    if (!account) {
        throw new ResponseError(404, 'account is not found');
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
