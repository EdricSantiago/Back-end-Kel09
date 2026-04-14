const Joi = require('joi');

const createAccountSchema = Joi.object({
    balance: Joi.number().min(0).required(),
});

const updateAccountSchema = Joi.object({
    balance: Joi.number().min(0).required(),
});

module.exports = {
    createAccountSchema,
    updateAccountSchema
};