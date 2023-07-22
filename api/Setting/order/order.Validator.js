const Joi = require("joi");

const orderSchema = Joi.object({
  persons: Joi.string().min(1).required().messages({
    "string.min": "Minimum 1 person required",
  }),

  waiter: Joi.string().min(3).max(50).required().messages({
    "string.min": "Waiter name should have more than 3 characters",
    "string.max": "Maximum 50 characters are permitted",
  }),

  table: Joi.string(),

  total_order_price: Joi.number().required(),

  order_status: Joi.string()
    .valid("Active", "Running", "Billing", "Settle")
    .default("Active")
    .messages({ "any.only": "Value is not matched" }),

  del_status: Joi.string()
    .valid("Live", "Deleted")
    .default("Live")
    .messages({ "any.only": "Value is not matched" }),
});

const updateSchema = Joi.object({
  persons: Joi.string().min(1).required().messages({
    "string.min": "Minimum 1 person required",
  }),

  waiter: Joi.string().min(3).max(50).required().messages({
    "string.min": "Waiter name should have more than 3 characters",
    "string.max": "Maximum 50 characters are permitted",
  }),

  table: Joi.string(),

  total_order_price: Joi.number().required(),

  order_status: Joi.string()
    .valid("Active", "Running", "Billing", "Settle")
    .default("Active")
    .messages({ "any.only": "Value is not matched" }),

  del_status: Joi.string()
    .valid("Live", "Deleted")
    .default("Live")
    .messages({ "any.only": "Value is not matched" }),
});

function validateOrder(orderData) {
  return orderSchema.validate(orderData, { abortEarly: false });
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData, { abortEarly: false });
}

module.exports = {
  validateOrder,
  validateUpdate,
};
