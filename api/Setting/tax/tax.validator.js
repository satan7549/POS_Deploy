const Joi = require("joi");

const taxSchema = Joi.object({
  tax_name: Joi.string().required(),
  description: Joi.string().required(),
  percentage: Joi.string().required(),
  country: Joi.string().required(),
  state: Joi.string().required(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

const updateSchema = Joi.object({
  tax_name: Joi.string().required(),
  description: Joi.string().required(),
  percentage: Joi.string().required(),
  country: Joi.string().required(),
  state: Joi.string().required(),
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
