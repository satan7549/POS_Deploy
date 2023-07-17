const Joi = require('joi');

const paymentSchema = Joi.object({
  payment_name: Joi.string().required().messages({
    'any.required': 'Please enter the payment method name',
    'string.empty': 'Please enter the payment method name',
  }),
  payment_method: Joi.string().valid('Credit-Card', 'Debit-Card', 'Cash').messages({
    'any.only': 'Value is not matched',
  }),
  other_method: Joi.string().valid('Other', 'UPI').messages({
    'any.only': 'Value is not matched',
  }),
  user_id: Joi.string(),
  company_id: Joi.string().required().messages({
    'any.required': 'Please enter company_id',
    'string.empty': 'Please enter company_id',
  }),
  del_status: Joi.string().required().default('Active'),
});

const updatePaymentSchema = Joi.object({
  payment_name: Joi.string().required().messages({
    'any.required': 'Please enter the payment method name',
    'string.empty': 'Please enter the payment method name',
  }),
  payment_method: Joi.string().valid('Credit-Card', 'Debit-Card', 'Cash').messages({
    'any.only': 'Value is not matched',
  }),
  other_method: Joi.string().valid('Other', 'UPI').messages({
    'any.only': 'Value is not matched',
  }),
  user_id: Joi.string(),
  company_id: Joi.string().required().messages({
    'any.required': 'Please enter company_id',
    'string.empty': 'Please enter company_id',
  }),
  del_status: Joi.string().required().default('Active'),
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
