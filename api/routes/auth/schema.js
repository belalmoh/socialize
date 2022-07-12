const Joi = require('joi');
const validateRequest = require('../../helpers/routerSchema');

const registerSchema = (req, res, next) => {
    const schema = Joi.object({
        userName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, res, next, schema);
};

const loginSchema = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, res, next, schema);
};

module.exports = {
    registerSchema, loginSchema
};