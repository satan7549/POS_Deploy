const Joi = require("joi");

const foodMenuJoiSchema = Joi.object({
  name: Joi.string().allow(null).max(50).required(),
  code: Joi.string().allow(null).max(50).required(),
  category: Joi.string().valid("chinese", "mexican", "indian").required(),
  ingredients: Joi.array()
    .items(
      Joi.object({
        ingredient: Joi.string().hex().length(24).required(),
        quantity: Joi.number().required(),
      })
    )
    .required(),
  price: Joi.number().required(),
  description: Joi.string().allow(null).max(200),
  isVeg: Joi.string().valid("yes", "no").required(),
  isBeverage: Joi.string().valid("yes", "no").required(),
  outlet: Joi.object().pattern(/^[a-zA-Z0-9]+$/, Joi.string().required()),
  company: Joi.string().required(),
});

const updateJoiSchema = Joi.object({
  name: Joi.string().allow(null).max(50).required(),
  code: Joi.string().allow(null).max(50).required(),
  category: Joi.string().valid("chinese", "mexican", "indian").required(),
  ingredients: Joi.array()
    .items(
      Joi.object({
        ingredient: Joi.string().hex().length(24).required(),
        quantity: Joi.number().required(),
      })
    )
    .required(),
  price: Joi.number().required(),
  description: Joi.string().allow(null).max(200),
  isVeg: Joi.string().valid("yes", "no").required(),
  isBeverage: Joi.string().valid("yes", "no").required(),
  outlet: Joi.object().pattern(/^[a-zA-Z0-9]+$/, Joi.string().required()),
  company: Joi.string().required(),
});

function validateFoodMenu(foodMenuData) {
  return foodMenuJoiSchema.validate(foodMenuData);
}

function validateUpdate(updateData) {
  return updateJoiSchema.validate(updateData);
}

module.exports = {
  validateFoodMenu,
  validateUpdate,
};
