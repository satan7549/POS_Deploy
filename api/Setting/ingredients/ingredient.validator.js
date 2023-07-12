const Joi = require("joi");

const ingredientSchema = Joi.object({
  name: Joi.string().min(5).max(50).required().trim().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name should have at least {5} characters",
    "string.max": "Name can have at most {50} characters",
    "any.required": "Name is required",
  }),
  code: Joi.number().required().messages({
    "number.base": "Code must be a number",
    "number.empty": "Code is required",
    "any.required": "Code is required",
  }),
  category: Joi.string().required().messages({
    "string.base": "Category must be a string",
    "string.empty": "Category is required",
    "any.required": "Category is required",
  }),
  PurchaseUnit: Joi.string().required().messages({
    "string.base": "PurchaseUnit must be a string",
    "string.empty": "PurchaseUnit is required",
    "any.required": "PurchaseUnit is required",
  }),
  ConsumptionUnit: Joi.string().required().messages({
    "string.base": "ConsumptionUnit must be a string",
    "string.empty": "ConsumptionUnit is required",
    "any.required": "ConsumptionUnit is required",
  }),
  ConversionRate: Joi.number().required().messages({
    "number.base": "ConversionRate must be a number",
    "number.empty": "ConversionRate is required",
    "any.required": "ConversionRate is required",
  }),
  PurchaseRate: Joi.number().required().messages({
    "number.base": "PurchaseRate must be a number",
    "number.empty": "PurchaseRate is required",
    "any.required": "PurchaseRate is required",
  }),
  costUnit: Joi.number().required().messages({
    "number.base": "CostUnit must be a number",
    "number.empty": "CostUnit is required",
    "any.required": "CostUnit is required",
  }),
  LowQty: Joi.number().required().messages({
    "number.base": "LowQty must be a number",
    "number.empty": "LowQty is required",
    "any.required": "LowQty is required",
  }),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});


const updateSchema = Joi.object({
  name: Joi.string().min(5).max(50).required().trim().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name should have at least {#limit} characters",
    "string.max": "Name can have at most {#limit} characters",
    "any.required": "Name is required",
  }),
  code: Joi.number().required().messages({
    "number.base": "Code must be a number",
    "number.empty": "Code is required",
    "any.required": "Code is required",
  }),
  category: Joi.string().required().messages({
    "string.base": "Category must be a string",
    "string.empty": "Category is required",
    "any.required": "Category is required",
  }),
  PurchaseUnit: Joi.string().required().messages({
    "string.base": "PurchaseUnit must be a string",
    "string.empty": "PurchaseUnit is required",
    "any.required": "PurchaseUnit is required",
  }),
  ConsumptionUnit: Joi.string().required().messages({
    "string.base": "ConsumptionUnit must be a string",
    "string.empty": "ConsumptionUnit is required",
    "any.required": "ConsumptionUnit is required",
  }),
  ConversionRate: Joi.number().required().messages({
    "number.base": "ConversionRate must be a number",
    "number.empty": "ConversionRate is required",
    "any.required": "ConversionRate is required",
  }),
  PurchaseRate: Joi.number().required().messages({
    "number.base": "PurchaseRate must be a number",
    "number.empty": "PurchaseRate is required",
    "any.required": "PurchaseRate is required",
  }),
  costUnit: Joi.number().required().messages({
    "number.base": "CostUnit must be a number",
    "number.empty": "CostUnit is required",
    "any.required": "CostUnit is required",
  }),
  LowQty: Joi.number().required().messages({
    "number.base": "LowQty must be a number",
    "number.empty": "LowQty is required",
    "any.required": "LowQty is required",
  }),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

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
