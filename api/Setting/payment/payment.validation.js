const Joi = require("joi");

const paymentSchema = Joi.object({
  name: Joi.string().max(50).min(5).required().messages({
    "string.max": "Maximum 50 characters are permitted",
    "string.min": "name should have more than 5 characters",
    "any.required": "Please enter name",
  }),

  description: Joi.string().max(100).required().messages({
    "string.max": "Maximum 100 characters are permitted",
    "any.required": "Please enter description",
  }),

  user_id: Joi.string().required().messages({
    "any.required": "Please enter user_id",
  }),

  company_id: Joi.string().required().messages({
    "any.required": "Please enter company_id",
  }),

  order_by: Joi.number().default(null),

  email: Joi.string().required().trim().email().messages({
    "any.required": "Please enter email",
    "string.email": "Invalid email format",
  }),

  del_status: Joi.string()
    .valid("Active", "Inactive")
    .default("Active")
    .required(),
});

const updatePaymentSchema = Joi.object({
  name: Joi.string().max(50).min(5).required().messages({
    "string.max": "Maximum 50 characters are permitted",
    "string.min": "name should have more than 5 characters",
    "any.required": "Please enter name",
  }),

  description: Joi.string().max(100).required().messages({
    "string.max": "Maximum 100 characters are permitted",
    "any.required": "Please enter description",
  }),

  user_id: Joi.string().required().messages({
    "any.required": "Please enter user_id",
  }),

  company_id: Joi.string().required().messages({
    "any.required": "Please enter company_id",
  }),

  order_by: Joi.number().default(null),

  email: Joi.string().required().trim().email().messages({
    "any.required": "Please enter email",
    "string.email": "Invalid email format",
  }),

  del_status: Joi.string()
    .valid("Active", "Inactive")
    .default("Active")
    .required(),
});

function validatePayment(paymentData) {
  return paymentSchema.validate(paymentData);
}

function validateUpdatePayment(updateData) {
  return updatePaymentSchema.validate(updateData);
}

module.exports = {
  validatePayment,
  validateUpdatePayment
};
