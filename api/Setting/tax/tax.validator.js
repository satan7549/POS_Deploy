const Joi = require("joi");

const taxSchema = Joi.object({
  tax_name: Joi.string().max(50).min(3).required().messages({
    "string.max": "Maximum 50 characters are permitted",
    "string.min": "tax_name should have more than 3 characters",
    "any.required": "Please enter tax_name",
  }),

  description: Joi.string().max(100).trim().default(null),

  percentage: Joi.number().required().messages({
    "any.required": "Please enter percentage",
  }),

  country: Joi.string().required().messages({
    "any.required": "Please enter country",
  }),

  state: Joi.string().required().messages({
    "any.required": "Please enter state",
  }),

  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

const updateSchema = Joi.object({
  tax_name: Joi.string().max(50).min(3).required().messages({
    "string.max": "Maximum 50 characters are permitted",
    "string.min": "tax_name should have more than 3 characters",
    "any.required": "Please enter tax_name",
  }),

  description: Joi.string().max(100).trim().default(null),

  percentage: Joi.number().required().messages({
    "any.required": "Please enter percentage",
  }),

  country: Joi.string().required().messages({
    "any.required": "Please enter country",
  }),

  state: Joi.string().required().messages({
    "any.required": "Please enter state",
  }),

  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

function validateTax(taxData) {
  return taxSchema.validate(taxData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateTax,
  validateUpdate,
};
