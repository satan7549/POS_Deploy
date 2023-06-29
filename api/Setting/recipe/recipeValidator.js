const Joi = require("joi");

const recipeSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  ingredients: Joi.array().items(
    Joi.object({
      ingredient: Joi.string().required(),
      quantity: Joi.string().required(),
    })
  ),
});

const updateSchema = Joi.object({
  name: Joi.string().allow(null).default(null),
  price: Joi.number().allow(null).default(null),
});

// Validate the area data
function validateRecipe(recipeData) {
  return recipeSchema.validate(recipeData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateRecipe,
  validateUpdate,
};
