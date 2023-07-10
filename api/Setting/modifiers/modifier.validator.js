const Joi = require("joi");

const modifierSchema = Joi.object({
  name: Joi.string().max(50),
  price: Joi.number(),
  description: Joi.string().max(300),
  user_id: Joi.number(),
  company_id: Joi.number(),
  tax_information: Joi.string(),
  tax_string: Joi.string().max(250),
  total_cost: Joi.number(),
  del_status: Joi.string().valid('Live', 'Deleted').default('Live')
});

const updateSchema = Joi.object({
  name: Joi.string().max(50),
  price: Joi.number(),
  description: Joi.string().max(300),
  user_id: Joi.number(),
  company_id: Joi.number(),
  tax_information: Joi.string(),
  tax_string: Joi.string().max(250),
  total_cost: Joi.number(),
  del_status: Joi.string().valid('Live', 'Deleted').default('Live')
});

function validateModifier(modifierData) {
  return modifierSchema.validate(modifierData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateModifier,
  validateUpdate,
};
