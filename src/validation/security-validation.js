const Joi = require('joi');

const pinSchema = Joi.object({
pin: Joi.string()
    .length(6)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
    'string.pattern.base': 'PIN Hanya Boleh Berupa Angka.',
    'string.length': 'PIN Harus terdiri Dari 6-digit Angka.',
    })
});

module.exports = { pinSchema };