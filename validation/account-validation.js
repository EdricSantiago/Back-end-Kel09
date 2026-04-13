const Joi = require('joi');

const createAccountSchema = Joi.object({
    balance: Joi.number().min(0).required(),
    userId: Joi.string().required()
});

const updateAccountSchema = Joi.object({
    balance: Joi.number().min(0).required(),
});

module.exports = {
    createAccountSchema,
    updateAccountSchema
};