const Joi = require("joi");

const foodMenuSchema = Joi.object({
  name: Joi.string().allow(null).max(50).required(),
  description: Joi.string().allow(null).max(200).required(),
  recipe: Joi.array().items(Joi.string().hex().length(24).required()).required(),
  outlet: Joi.object().pattern(
    /^[a-zA-Z0-9]+$/,
    Joi.string().hex().length(24).required()
  ).required(),
  company: Joi.string().hex().length(24).required(),
});

const updateSchema = Joi.object({
  name: Joi.string().allow(null).max(50),
  description: Joi.string().allow(null).max(200),
  recipe: Joi.array().items(Joi.string().hex().length(24).required()),
  outlet: Joi.object().pattern(
    /^[a-zA-Z0-9]+$/,
    Joi.string().hex().length(24).required()
  ),
  company: Joi.string().hex().length(24),
});

function validateFoodMenu(foodMenuData) {
  return foodMenuSchema.validate(foodMenuData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateFoodMenu,
  validateUpdate,
};