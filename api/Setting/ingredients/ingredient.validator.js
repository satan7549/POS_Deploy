const Joi = require("joi");

const ingredientSchema = Joi.object({
  
  name: Joi.string().min(5).max(50).required(),
  category: Joi.string().min(10).max(100).required(),
  unit: Joi.string().min(5).max(50).required(),
  costUnit: Joi.number().required(),
});

const updateSchema = Joi.object({

  name: Joi.string().min(5).max(50).required(),
  category: Joi.string().min(10).max(100).required(),
  unit: Joi.string().min(5).max(50).required(),
  costUnit: Joi.number().required(),
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
