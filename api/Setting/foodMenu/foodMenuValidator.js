const Joi = require("joi");

const foodMenuJoiSchema = Joi.object({
  name: Joi.string().max(50).required(),
  code: Joi.string().max(50).required(),
  food_category: Joi.string().required(),
  ingredients: Joi.array()
    .items(
      Joi.object({
        ingredient: Joi.string().required(),
        quantity: Joi.number().required(),
      })
    )
    .required(),
  price: Joi.number().required(),
  description: Joi.string().max(200).required(),
  isVeg: Joi.string().valid("yes", "no").required(),
  isBeverage: Joi.string().valid("yes", "no").required(),
  outlet: Joi.string().required(),
});

const updateJoiSchema = Joi.object({
  name: Joi.string().max(50).required(),
  code: Joi.string().max(50).required(),
  food_category: Joi.string().required(),
  ingredients: Joi.array()
    .items(
      Joi.object({
        ingredient: Joi.string().required(),
        quantity: Joi.number().required(),
      })
    )
    .required(),
  price: Joi.number().required(),
  description: Joi.string().max(200).required(),
  isVeg: Joi.string().valid("yes", "no").required(),
  isBeverage: Joi.string().valid("yes", "no").required(),
  outlet: Joi.string().required(),
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
