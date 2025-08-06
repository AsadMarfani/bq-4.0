const Joi = require('joi');
const allowedRoles = require('../constants/roles');

const userRegisterSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid(...allowedRoles).optional()
});

module.exports = { userRegisterSchema };
