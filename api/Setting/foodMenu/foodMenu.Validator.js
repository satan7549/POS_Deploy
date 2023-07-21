const Joi = require("joi");

const foodMenuSchema = Joi.object({
  name: Joi.string().max(50).required().trim(),
  code: Joi.string().max(50).required().trim(),
  food_category: Joi.string().required(),
  ingredients: Joi.array()
    .items(
      Joi.object({
        ingredient: Joi.string().required(),
        quantity: Joi.number().min(1).required(),
      })
    )
    .required(),
  Dine_price: Joi.number().min(0).messages({
    "number.base": "Dine_price must be a number",
    "number.empty": "Dine_price is required",
    "any.required": "Please enter a Dine_price",
    "number.min": "Dine_price should be greater than or equal to 0",
  }),
  Takeaway_price: Joi.number().min(0).messages({
    "number.base": "Takeaway_price must be a number",
    "number.empty": "Takeaway_price is required",
    "any.required": "Please enter a Takeaway_price",
    "number.min": "Takeaway_price should be greater than or equal to 0",
  }),
  Delivery_price: Joi.array()
    .items(
      Joi.object({
        deliveryPartnerName: Joi.string().required(),
        price: Joi.number().min(0).required(),
      })
    )
    .required(),
  description: Joi.string().max(200).trim().default(null),
  isVeg: Joi.boolean().required().messages({
    "boolean.base": "isVeg must be a boolean",
    "any.required": "Please specify if the combo is vegetarian",
  }),
  isBeverage: Joi.boolean().required().messages({
    "boolean.base": "isBeverage must be a boolean",
    "any.required": "Please specify if the combo is a beverage",
  }),
  outlet: Joi.string().required().trim(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

function validateFoodMenu(foodMenuData) {
  return foodMenuSchema.validate(foodMenuData);
}

module.exports = {
  validateFoodMenu,
};
