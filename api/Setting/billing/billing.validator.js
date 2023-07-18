const Joi = require("joi");

const billingSchema = Joi.object({
  billing_name: Joi.string().required(),
  userID: Joi.string().required(),
  email_address: Joi.string().required(),
  billingDate: Joi.date().required(),
  totalAmount: Joi.number().required(),
  paymentMethod: Joi.string().required(),
  transactionStatus: Joi.string().required(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live")
});

const updateSchema = Joi.object({
  billing_name: Joi.string().required(),
  userID: Joi.string().required(),
  email_address: Joi.string().required(),
  billingDate: Joi.date().required(),
  totalAmount: Joi.number().required(),
  paymentMethod: Joi.string().required(),
  transactionStatus: Joi.string().required(),
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
