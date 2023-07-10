const Joi = require("joi");

const foodComboJoiSchema = Joi.object({


 name: Joi.string().min(5).max(50).required().trim()
.messages({
'string.base': 'Name must be a string',
'string.empty': 'Name is required',
'string.min': 'Name should have at least {#limit} characters',
'string.max': 'Name can have at most {#limit} characters',
'any.required': 'Please enter a name',
}),

code: Joi.string().min(5).max(50).required().trim()
.messages({
'string.base': 'Code must be a string',
'string.empty': 'Code is required',
'string.min': 'Code should have at least {#limit} characters',
'string.max': 'Code can have at most {#limit} characters',
'any.required': 'Please enter a code',
}),

food_category: Joi.string().required()
.messages({
'string.base': 'Food category must be a string',
'string.empty': 'Food category is required',
'any.required': 'Please enter a food category',
}),

food_menu: Joi.array().items(Joi.object({food_item: Joi.string().required()
.messages({
'string.base': 'Food menu item must be a string',
'string.empty': 'Food menu item is required',
'any.required': 'Please enter a food menu item',
}),
quantity: Joi.number().min(1).max(10).required()
.messages({
  'number.base': 'Quantity must be a number',
  'number.empty': 'Quantity is required',
  'number.min': 'Quantity should be at least {#limit}',
  'number.max': 'Maximum quantity is {#limit}',
  'any.required': 'Please enter a quantity',
}),
})
),
price: Joi.number().required()
.messages({
'number.base': 'Price must be a number',
'number.empty': 'Price is required',
'any.required': 'Please enter a price',
}),

description: Joi.string().min(10).max(200).required().trim()
.messages({
'string.base': 'Description must be a string',
'string.empty': 'Description is required',
'string.min': 'Description should have at least {#limit} characters',
'string.max': 'Description can have at most {#limit} characters',
'any.required': 'Please enter a description',
}),

isVeg: Joi.boolean().required()
.messages({
'boolean.base': 'IsVeg must be a boolean',
'any.required': 'Please specify if the combo is vegetarian',
}),

isBeverage: Joi.boolean().required()
.messages({
'boolean.base': 'IsBeverage must be a boolean',
'any.required': 'Please specify if the combo is a beverage',
}),

outlet: Joi.string().required()
.messages({
'string.base': 'Outlet must be a string',
'string.empty': 'Outlet is required',
'any.required': 'Please enter an outlet',
}),

del_status: Joi.string().valid('Live', 'Deleted').default('Live'),
});



const updateJoiSchema = Joi.object({

   name: Joi.string().min(5).max(50).required().trim()
.messages({
'string.base': 'Name must be a string',
'string.empty': 'Name is required',
'string.min': 'Name should have at least {#limit} characters',
'string.max': 'Name can have at most {#limit} characters',
'any.required': 'Please enter a name',
}),

code: Joi.string().min(5).max(50).required().trim()
.messages({
'string.base': 'Code must be a string',
'string.empty': 'Code is required',
'string.min': 'Code should have at least {#limit} characters',
'string.max': 'Code can have at most {#limit} characters',
'any.required': 'Please enter a code',
}),

food_category: Joi.string().required()
.messages({
'string.base': 'Food category must be a string',
'string.empty': 'Food category is required',
'any.required': 'Please enter a food category',
}),

food_menu: Joi.array().items(Joi.object({food_item: Joi.string().required()
.messages({
'string.base': 'Food menu item must be a string',
'string.empty': 'Food menu item is required',
'any.required': 'Please enter a food menu item',
}),
quantity: Joi.number().min(1).max(10).required()
.messages({
  'number.base': 'Quantity must be a number',
  'number.empty': 'Quantity is required',
  'number.min': 'Quantity should be at least {#limit}',
  'number.max': 'Maximum quantity is {#limit}',
  'any.required': 'Please enter a quantity',
}),
})
),
price: Joi.number().required()
.messages({
'number.base': 'Price must be a number',
'number.empty': 'Price is required',
'any.required': 'Please enter a price',
}),

description: Joi.string().min(10).max(200).required().trim()
.messages({
'string.base': 'Description must be a string',
'string.empty': 'Description is required',
'string.min': 'Description should have at least {#limit} characters',
'string.max': 'Description can have at most {#limit} characters',
'any.required': 'Please enter a description',
}),

isVeg: Joi.boolean().required()
.messages({
'boolean.base': 'IsVeg must be a boolean',
'any.required': 'Please specify if the combo is vegetarian',
}),

isBeverage: Joi.boolean().required()
.messages({
'boolean.base': 'IsBeverage must be a boolean',
'any.required': 'Please specify if the combo is a beverage',
}),

outlet: Joi.string().required()
.messages({
'string.base': 'Outlet must be a string',
'string.empty': 'Outlet is required',
'any.required': 'Please enter an outlet',
}),

del_status: Joi.string().valid('Live', 'Deleted').default('Live'),
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
