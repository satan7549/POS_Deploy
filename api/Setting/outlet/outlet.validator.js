const Joi = require("joi");

const outletSchemaValidator = Joi.object({
  company_id: Joi.string().required().messages({
    "string.base": `Company ID should be a string`,
    "string.empty": `Company ID is required`,
    "any.required": `Company ID is required`,
  }),
  outlet_name: Joi.string().max(100).required().messages({
    "string.base": `Outlet name should be a string`,
    "string.empty": `Outlet name is required`,
    "string.max": `Outlet name should have at most {#limit} characters`,
    "any.required": `Outlet name is required`,
  }),
  outlet_code: Joi.string().min(1).max(50).required().messages({
    "string.base": `Outlet code should be a string`,
    "string.empty": `Outlet code is required`,
    "string.min": `Outlet code should have at least {#limit} characters`,
    "string.max": `Outlet code should have at most {#limit} characters`,
    "any.required": `Outlet code is required`,
  }),
  address: Joi.string().min(5).max(200).required().messages({
    "string.base": `Address should be a string`,
    "string.empty": `Address is required`,
    "string.min": `Address should have at least {#limit} characters`,
    "string.max": `Address should have at most {#limit} characters`,
    "any.required": `Address is required`,
  }),
  phone: Joi.number()
    .integer()
    .min(1000000000)
    .max(9999999999)
    .required()
    .messages({
      "number.base": `Phone number should be a number`,
      "number.empty": `Phone number is required`,
      "number.min": `Phone number should have at least {#limit} digits`,
      "number.max": `Phone number should have at most {#limit} digits`,
      "any.required": `Phone number is required`,
    }),
  email: Joi.string().email().min(3).max(30).required().messages({
    "string.base": `Email should be a string`,
    "string.empty": `Email is required`,
    "string.email": `Please enter a valid email`,
    "string.min": `Email should have at least {#limit} characters`,
    "string.max": `Email should have at most {#limit} characters`,
    "any.required": `Email is required`,
  }),
  default_waiter: Joi.number().required().messages({
    "number.base": `Default waiter should be a number`,
    "number.empty": `Default waiter is required`,
    "any.required": `Default waiter is required`,
  }),
  food_menus: Joi.array().items(Joi.string()).messages({
    "array.base": `Food menus should be an array`,
    "array.items": `Invalid food menu value`,
  }),
  active_status: Joi.string().valid("active", "notactive").required().messages({
    "string.base": `Active status should be a string`,
    "string.empty": `Active status is required`,
    "string.valid": `Value is not matched`,
    "any.required": `Active status is required`,
  }),
  del_status: Joi.string().valid("Live", "Deleted").default("Live").messages({
    "string.base": `Delete status should be a string`,
    "string.valid": `Value is not matched`,
    "any.only": `Invalid delete status value`,
  }),
});

// Validate the outlet data
function validateOutlet(outletData) {
  return outletSchemaValidator.validate(outletData);
}

// Validate the update data
function validateUpdate(updateData) {
  return outletSchemaValidator.validate(updateData);
}

module.exports = {
  validateOutlet,
  validateUpdate,
};
