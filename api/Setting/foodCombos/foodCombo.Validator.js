const Joi = require("joi");

const foodComboJoiSchema = Joi.object({
  name: Joi.string().max(50).min(5).required().trim(),
  code: Joi.string().max(50).min(5).required().trim(),
  food_category: Joi.string().hex().length(24).required(),
  food_menu: Joi.array()
    .items(
      Joi.object({
        food_item: Joi.string().hex().length(24).required(),
        quantity: Joi.number().min(1).max(10).required(),
      })
    )
    .required(),
  price: Joi.number().required(),
  description: Joi.string().max(200).min(10).required().trim(),
  isVeg: Joi.string().valid("yes", "no").required().trim(),
  isBeverage: Joi.string().valid("yes", "no").required().trim(),
  outlet: Joi.string().hex().length(24).required().trim(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

const updateJoiSchema = Joi.object({
  name: Joi.string().max(50).min(5).required().trim(),
  code: Joi.string().max(50).min(5).required().trim(),
  food_category: Joi.string().hex().length(24).required(),
  food_menu: Joi.array()
    .items(
      Joi.object({
        food_item: Joi.string().hex().length(24).required(),
        quantity: Joi.number().min(1).max(10).required(),
      })
    )
    .required(),
  price: Joi.number().required(),
  description: Joi.string().max(200).min(10).required().trim(),
  isVeg: Joi.string().valid("yes", "no").required().trim(),
  isBeverage: Joi.string().valid("yes", "no").required().trim(),
  outlet: Joi.string().hex().length(24).required().trim(),
});

function validateFoodCombo(foodComboData) {
  return foodComboJoiSchema.validate(foodComboData);
}

function validateUpdate(updateData) {
  return updateJoiSchema.validate(updateData);
}

module.exports = {
  validateFoodCombo,
  validateUpdate,
};
