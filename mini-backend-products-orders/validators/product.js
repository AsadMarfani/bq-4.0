const Joi = require('joi');

exports.productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  category: Joi.string().required(),
  brand: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().min(0).required(),
  inStock: Joi.boolean().optional(),
  rating: Joi.number().min(0).max(5).optional()
});
