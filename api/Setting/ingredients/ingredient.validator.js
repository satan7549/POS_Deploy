const Joi = require("joi");

const ingredientSchema = Joi.object({
  name: Joi.string().allow(null).default(null),
  category: Joi.string().allow(null).default(null),
  unit: Joi.string().required(),
  costUnit: Joi.number().allow(null).default(null),
  quantity: Joi.number().allow(null).default(null),
});

const updateSchema = Joi.object({
  name: Joi.string().allow(null).default(null),
  category: Joi.string().allow(null).default(null),
  unit: Joi.string().required(),
  costUnit: Joi.number().allow(null).default(null),
  quantity: Joi.number().allow(null).default(null),
});

// Validate the area data
function validateIngredient(ingredientData) {
  return ingredientSchema.validate(ingredientData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateIngredient,
  validateUpdate,
};
