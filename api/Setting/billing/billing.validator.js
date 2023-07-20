const Joi = require("joi");

const billingSchema = Joi.object({
<<<<<<< HEAD
  billing_name: Joi.string().required(),
  userID: Joi.string().required(),
  email_address: Joi.string().required(),
  billingDate: Joi.date().required(),
  totalAmount: Joi.number().required(),
  paymentMethod: Joi.string().required(),
  transactionStatus: Joi.string().required(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
=======

>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
  billing_name: Joi.string().max(50).min(5).required().messages({
    "string.max": "Maximum 50 characters are permitted",
    "string.min": "billing_name should have more than 5 characters",
    "any.required": "Please enter billing_name",
  }),

  userID: Joi.string().required().messages({
    "any.required": "Please enter userID",
  }),

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

<<<<<<< HEAD
  del_status: Joi.string().valid("Live", "Deleted").default("Live")
=======
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
});



const updateSchema = Joi.object({
<<<<<<< HEAD
  billing_name: Joi.string().required(),
  userID: Joi.string().required(),
  email_address: Joi.string().required(),
  billingDate: Joi.date().required(),
  totalAmount: Joi.number().required(),
  paymentMethod: Joi.string().required(),
  transactionStatus: Joi.string().required(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
=======

>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
  billing_name: Joi.string().max(50).min(5).required().messages({
    "string.max": "Maximum 50 characters are permitted",
    "string.min": "billing_name should have more than 5 characters",
    "any.required": "Please enter billing_name",
  }),

  userID: Joi.string().required().messages({
    "any.required": "Please enter userID",
  }),

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

<<<<<<< HEAD
  del_status: Joi.string().valid("Live", "Deleted").default("Live")
=======
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),

>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
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
