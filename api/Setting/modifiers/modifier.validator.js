const Joi = require("joi");

const modifierSchema = Joi.object({

  name: Joi.string().min(5).max(50).required().trim().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name should have at least {#limit} characters",
    "string.max": "Name can have at most {#limit} characters",
    "any.required": "Please enter a modifier name",
  }),

  price: Joi.number().required().messages({
    "number.base": "Price must be a number",
    "number.empty": "Price is required",
    "any.required": "Please enter a modifier price",
  }),

  description: Joi.string().min(10).max(100).required().trim().messages({
    "string.base": "Description must be a string",
    "string.empty": "Description is required",
    "string.min": "Description should have at least {#limit} characters",
    "string.max": "Description can have at most {#limit} characters",
    "any.required": "Please enter a modifier description",
  }),

  company_id: Joi.string().required().messages({
    "string.base": "Company ID must be a string",
    "string.empty": "Company ID is required",
    "any.required": "Please enter a company ID",
  }),

  tax_information: Joi.string().min(10).max(100).required().trim().messages({
    "string.base": "Tax information must be a string",
    "string.empty": "Tax information is required",
    "string.min": "Tax information should have at least {#limit} characters",
    "string.max": "Tax information can have at most {#limit} characters",
    "any.required": "Please enter tax information",
  }),

  tax_string: Joi.string().min(10).max(250).required().trim().messages({
    "string.base": "Tax string must be a string",
    "string.empty": "Tax string is required",
    "string.min": "Tax string should have at least {#limit} characters",
    "string.max": "Tax string can have at most {#limit} characters",
    "any.required": "Please enter a tax string",
  }),

  total_cost: Joi.number().required().messages({
    "number.base": "Total cost must be a number",
    "number.empty": "Total cost is required",
    "any.required": "Please enter a total cost",
  }),

  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});



const updateSchema = Joi.object({
  
  name: Joi.string().min(5).max(50).required().trim().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name should have at least {#limit} characters",
    "string.max": "Name can have at most {#limit} characters",
    "any.required": "Please enter a modifier name",
  }),

  price: Joi.number().required().messages({
    "number.base": "Price must be a number",
    "number.empty": "Price is required",
    "any.required": "Please enter a modifier price",
  }),

  description: Joi.string().min(10).max(100).required().trim().messages({
    "string.base": "Description must be a string",
    "string.empty": "Description is required",
    "string.min": "Description should have at least {#limit} characters",
    "string.max": "Description can have at most {#limit} characters",
    "any.required": "Please enter a modifier description",
  }),

  company_id: Joi.string().required().messages({
    "string.base": "Company ID must be a string",
    "string.empty": "Company ID is required",
    "any.required": "Please enter a company ID",
  }),

  tax_information: Joi.string().min(10).max(100).required().trim().messages({
    "string.base": "Tax information must be a string",
    "string.empty": "Tax information is required",
    "string.min": "Tax information should have at least {#limit} characters",
    "string.max": "Tax information can have at most {#limit} characters",
    "any.required": "Please enter tax information",
  }),

  tax_string: Joi.string().min(10).max(250).required().trim().messages({
    "string.base": "Tax string must be a string",
    "string.empty": "Tax string is required",
    "string.min": "Tax string should have at least {#limit} characters",
    "string.max": "Tax string can have at most {#limit} characters",
    "any.required": "Please enter a tax string",
  }),

  total_cost: Joi.number().required().messages({
    "number.base": "Total cost must be a number",
    "number.empty": "Total cost is required",
    "any.required": "Please enter a total cost",
  }),

  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

function validateModifier(modifierData) {
  return modifierSchema.validate(modifierData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateModifier,
  validateUpdate,
};
