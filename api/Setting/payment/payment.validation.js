const Joi = require('joi');

const paymentMethodSchema = Joi.object({
  name: Joi.string().required().max(50),
  description: Joi.string().required().max(50),
  user_id: Joi.number().required(),
  company_id: Joi.number().required(),
  order_by: Joi.number().allow(null),
  personalinformation: Joi.string().allow(null),
  del_status: Joi.string().max(10).default('Live')
});

const updatePaymentMethodSchema = Joi.object({
  name: Joi.string().max(50),
  description: Joi.string().max(50),
  user_id: Joi.number(),
  company_id: Joi.number(),
  order_by: Joi.number().allow(null),
  personalinformation: Joi.string().allow(null),
  del_status: Joi.string().max(10)
});

function validatePaymentMethod(paymentMethodData) {
  return paymentMethodSchema.validate(paymentMethodData);
}

function validateUpdatePaymentMethod(updateData) {
  return updatePaymentMethodSchema.validate(updateData);
}

module.exports = {
  validatePaymentMethod,
  validateUpdatePaymentMethod
};
