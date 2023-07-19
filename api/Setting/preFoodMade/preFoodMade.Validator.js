const Joi = require("joi");

const preFoodMadeSchema = Joi.object({
    nameFood: Joi.string()
    .min(5)
    .max(50)
    .required()
    .trim()
    .messages({
      'string.base': 'Food name should be a string',
      'string.empty': 'Please enter food name',
      'string.min': 'Food name should have at least {#limit} characters',
      'string.max': 'Food name should have at most {#limit} characters',
      'any.required': 'Please enter food name',
    }),
  category: Joi.string()
    .min(5)
    .max(50)
    .required()
    .trim()
    .messages({
      'string.base': 'Category should be a string',
      'string.empty': 'Please enter category',
      'string.min': 'Category should have at least {#limit} characters',
      'string.max': 'Category should have at most {#limit} characters',
      'any.required': 'Please enter category',
    }),
  purchasePrice: Joi.number()
    .required()
    .messages({
      'number.base': 'Purchase price should be a number',
      'any.required': 'Please enter purchase price',
    }),
  lowQA: Joi.number()
    .required()
    .messages({
      'number.base': 'Low QA should be a number',
      'any.required': 'Please enter Low QA',
    }),
  unit: Joi.string()
    .valid('Gm', 'Kg', 'L', 'Ml', 'Mg')
    .default('Gm')
    .messages({
      'any.only': 'Value is not supported for unit',
    }),
});

const updateSchema = Joi.object({
    nameFood: Joi.string()
    .min(5)
    .max(50)
    .required()
    .trim()
    .messages({
      'string.base': 'Food name should be a string',
      'string.empty': 'Please enter food name',
      'string.min': 'Food name should have at least {#limit} characters',
      'string.max': 'Food name should have at most {#limit} characters',
      'any.required': 'Please enter food name',
    }),
  category: Joi.string()
    .min(5)
    .max(50)
    .required()
    .trim()
    .messages({
      'string.base': 'Category should be a string',
      'string.empty': 'Please enter category',
      'string.min': 'Category should have at least {#limit} characters',
      'string.max': 'Category should have at most {#limit} characters',
      'any.required': 'Please enter category',
    }),
  purchasePrice: Joi.number()
    .required()
    .messages({
      'number.base': 'Purchase price should be a number',
      'any.required': 'Please enter purchase price',
    }),
  lowQA: Joi.number()
    .required()
    .messages({
      'number.base': 'Low QA should be a number',
      'any.required': 'Please enter Low QA',
    }),
  unit: Joi.string()
    .valid('Gm', 'Kg', 'L', 'Ml', 'Mg')
    .default('Gm')
    .messages({
      'any.only': 'Value is not supported for unit',
    }),
});

function validatePreFoodMade(preFoodMadeData) {
  return preFoodMadeSchema.validate(preFoodMadeData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
    validatePreFoodMade,
  validateUpdate,
};
