const Joi = require("joi");

const deliveryPartnerSchema = Joi.object({
  DeliveryPartner_name: Joi.string().min(5).max(50).required().trim().messages({
    "string.min": "DeliveryPartner_name should have more than 5 characters",
    "string.max": "Maximum 50 characters are permitted",
    "any.required": "Please enter DeliveryPartner_name",
  }),
  email: Joi.string().email().required().trim().messages({
    "string.email": "Please enter a valid email",
    "any.required": "Please enter email",
  }),
  phone: Joi.number()
    .required()
    .messages({ "any.required": "Please enter phone" }),
  address: Joi.string().min(5).max(100).required().trim().messages({
    "string.min": "Address should have more than 5 characters",
    "string.max": "Maximum 100 characters are permitted",
    "any.required": "Please enter address",
  }),
  createdAt: Joi.date().default(Date.now),
  del_status: Joi.string()
    .valid("Live", "Deleted")
    .default("Live")
    .messages({ "any.only": "Values is not matched" }),
});

const updateSchema = Joi.object({
  DeliveryPartner_name: Joi.string().min(5).max(50).required().trim().messages({
    "string.min": "DeliveryPartner_name should have more than 5 characters",
    "string.max": "Maximum 50 characters are permitted",
    "any.required": "Please enter DeliveryPartner_name",
  }),
  email: Joi.string().email().required().trim().messages({
    "string.email": "Please enter a valid email",
    "any.required": "Please enter email",
  }),
  phone: Joi.number()
    .required()
    .messages({ "any.required": "Please enter phone" }),
  address: Joi.string().min(5).max(100).required().trim().messages({
    "string.min": "Address should have more than 5 characters",
    "string.max": "Maximum 100 characters are permitted",
    "any.required": "Please enter address",
  }),
  createdAt: Joi.date().default(Date.now),
  del_status: Joi.string()
    .valid("Live", "Deleted")
    .default("Live")
    .messages({ "any.only": "Values is not matched" }),
});

function validateDeliveryPartner(deliveryPartnerData) {
  return deliveryPartnerSchema.validate(deliveryPartnerData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateDeliveryPartner,
  validateUpdate,
};
