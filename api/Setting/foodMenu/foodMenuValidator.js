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
  Dine_price: Joi.number().required().messages({
    "number.base": "Dine_price must be a number",
    "number.empty": "Dine_price is required",
    "any.required": "Please enter a Dine_price",
  }),
  Takeaway_price: Joi.number().required().messages({
    "number.base": "Takeaway_price must be a number",
    "number.empty": "Takeaway_price is required",
    "any.required": "Please enter a Takeaway_price",
  }),
  Delivery_price: Joi.number().required().messages({
    "number.base": "Delivery_price must be a number",
    "number.empty": "Delivery_price is required",
    "any.required": "Please enter a Delivery_price",
  }),
  description: Joi.string().max(200).required(),
  isVeg: Joi.boolean().required().messages({
    "boolean.base": "IsVeg must be a boolean",
    "any.required": "Please specify if the combo is vegetarian",
  }),

  isBeverage: Joi.boolean().required().messages({
    "boolean.base": "IsBeverage must be a boolean",
    "any.required": "Please specify if the combo is a beverage",
  }),
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
  Dine_price: Joi.number().required().messages({
    "number.base": "Dine_price must be a number",
    "number.empty": "Dine_price is required",
    "any.required": "Please enter a Dine_price",
  }),
  Takeaway_price: Joi.number().required().messages({
    "number.base": "Takeaway_price must be a number",
    "number.empty": "Takeaway_price is required",
    "any.required": "Please enter a Takeaway_price",
  }),
  Delivery_price: Joi.number().required().messages({
    "number.base": "Delivery_price must be a number",
    "number.empty": "Delivery_price is required",
    "any.required": "Please enter a Delivery_price",
  }),

  description: Joi.string().max(200).required(),

  isVeg: Joi.boolean().required().messages({
    "boolean.base": "IsVeg must be a boolean",
    "any.required": "Please specify if the combo is vegetarian",
  }),

  isBeverage: Joi.boolean().required().messages({
    "boolean.base": "IsBeverage must be a boolean",
    "any.required": "Please specify if the combo is a beverage",
  }),
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
