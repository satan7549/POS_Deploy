const Joi = require('joi');

// Define the validation schema for currency data
const currencySchema = Joi.object({
  currency: Joi.string().max(10).allow(null),
  conversion_rate: Joi.number().allow(null),
  company_id: Joi.number().allow(null),
  del_status: Joi.string().max(10).default('Active')
});

const updateSchema = Joi.object({
  currency: Joi.string().max(10).allow(null),
  conversion_rate: Joi.number().allow(null),
  company_id: Joi.number().allow(null),
  del_status: Joi.string().max(10).default('Active')
});


// Validate the currency data
function validateCurrency(currencyData) {
  return currencySchema.validate(currencyData);
}

// Validate the update data
function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateCurrency,
  validateUpdate
};
