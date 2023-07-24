const Joi = require("joi");

const billingSchema = Joi.object({
  billing_name: Joi.string().max(50).min(3).required().messages({
    "string.max": "Maximum 50 characters are permitted",
    "string.min": "billing_name should have more than 3 characters",
    "any.required": "Please enter billing_name",
  }),

  userID: Joi.string().required().messages({
    "any.required": "Please enter userID",
  }),

  email_address: Joi.string().required(),

  billingDate: Joi.date().default(Date.now),

  totalAmount: Joi.number().required().messages({
    "any.required": "Please enter totalAmount",
  }),

  paymentMethod: Joi.string().max(50).min(3).required().messages({
    "string.max": "Maximum 50 characters are permitted",
    "string.min": "paymentMethod name should have more than 3 characters",
    "any.required": "Please enter paymentMethod",
  }),

  transactionStatus: Joi.string()
    .valid("Pending", "Done", "Failed")
    .default("Done"),

  del_status: Joi.string().valid("Live", "Deleted").default("Live")
});



const updateSchema = Joi.object({
  billing_name: Joi.string().max(50).min(3).required().messages({
    "string.max": "Maximum 50 characters are permitted",
    "string.min": "billing_name should have more than 3 characters",
    "any.required": "Please enter billing_name",
  }),

  userID: Joi.string().required().messages({
    "any.required": "Please enter userID",
  }),

  email_address: Joi.string().required(),

  billingDate: Joi.date().default(Date.now),

  totalAmount: Joi.number().required().messages({
    "any.required": "Please enter totalAmount",
  }),

  paymentMethod: Joi.string().max(50).min(3).required().messages({
    "string.max": "Maximum 50 characters are permitted",
    "string.min": "paymentMethod name should have more than 3 characters",
    "any.required": "Please enter paymentMethod",
  }),

  transactionStatus: Joi.string()
    .valid("Pending", "Done", "Failed")
    .default("Done"),

  del_status: Joi.string().valid("Live", "Deleted").default("Live")

});

function validateBilling(billingData) {
  return billingSchema.validate(billingData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateBilling,
  validateUpdate,
};
