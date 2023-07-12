const Joi = require("joi");

const userSchema = Joi.object({
  full_name: Joi.string().min(5).max(50).required().messages({
    "string.base": `Full name should be a string`,
    "string.empty": `Full name is required`,
    "string.min": `Full name should have at least {#limit} characters`,
    "string.max": `Full name should have at most {#limit} characters`,
    "any.required": `Full name is required`,
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
  email: Joi.string().email().required().max(50).messages({
    "string.base": `Email address should be a string`,
    "string.empty": `Email address is required`,
    "string.email": `Please enter a valid email address`,
    "string.max": `Email address should have at most {#limit} characters`,
    "any.required": `Email address is required`,
  }),
  password: Joi.string().min(6).required().max(50).messages({
    "string.base": `Password should be a string`,
    "string.empty": `Password is required`,
    "string.min": `Password should have at least {#limit} characters`,
    "string.max": `Password should have at most {#limit} characters`,
    "any.required": `Password is required`,
  }),
  role: Joi.string()
    .valid("Super_Admin", "Admin", "Employee", "Customer")
    .required()
    .messages({
      "string.base": `Role should be a string`,
      "string.empty": `Role is required`,
      "any.only": `Invalid role value`,
      "any.required": `Role is required`,
    }),
  designation: Joi.string().allow(null).max(100).messages({
    "string.base": `Designation should be a string`,
    "string.max": `Designation should have at most {#limit} characters`,
  }),
  outlet_id: Joi.number().integer().allow(null).messages({
    "number.base": `Outlet ID should be a number`,
    "number.integer": `Outlet ID should be an integer`,
  }),
  kitchens: Joi.string().allow(null).max(250).messages({
    "string.base": `Kitchens should be a string`,
    "string.max": `Kitchens should have at most {#limit} characters`,
  }),
  last_login: Joi.string().allow(null).max(100).messages({
    "string.base": `Last login should be a string`,
    "string.max": `Last login should have at most {#limit} characters`,
  }),
  created_id: Joi.number().integer().allow(null).messages({
    "number.base": `Created ID should be a number`,
    "number.integer": `Created ID should be an integer`,
  }),
  active_status: Joi.string().default("Active").max(25).messages({
    "string.base": `Active status should be a string`,
    "string.max": `Active status should have at most {#limit} characters`,
  }),
  del_status: Joi.string().default("Active").max(10).messages({
    "string.base": `Delete status should be a string`,
    "string.max": `Delete status should have at most {#limit} characters`,
  }),
  question: Joi.string().allow(null).max(250).messages({
    "string.base": `Question should be a string`,
    "string.max": `Question should have at most {#limit} characters`,
  }),
  answer: Joi.string().allow(null).max(250).messages({
    "string.base": `Answer should be a string`,
    "string.max": `Answer should have at most {#limit} characters`,
  }),
  login_pin: Joi.string().allow(null).max(4).messages({
    "string.base": `Login pin should be a string`,
    "string.max": `Login pin should have at most {#limit} characters`,
  }),
  order_receiving_id: Joi.number().integer().default(0).messages({
    "number.base": `Order receiving ID should be a number`,
    "number.integer": `Order receiving ID should be an integer`,
  }),
  role_id: Joi.number().integer().allow(null).messages({
    "number.base": `Role ID should be a number`,
    "number.integer": `Role ID should be an integer`,
  }),
});

// Validate the user data
function validateUser(userData) {
  const { error, value } = userSchema.validate(userData);
  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    throw new Error(errorMessage);
  }
  return value;
}

// Validate the update data
function validateUpdate(updateData) {
  const { error, value } = userSchema.validate(updateData);
  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    throw new Error(errorMessage);
  }
  return value;
}

module.exports = {
  validateUser,
  validateUpdate,
};
