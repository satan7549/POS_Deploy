const Joi = require("joi");

const deliveryPartnerSchema = Joi.object({
  DeliveryPartner_name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  country: Joi.string().required(),
  postal_code: Joi.string().required(),
  created_at: Joi.date().required(),
  updated_at: Joi.date().required(),
  del_status: Joi.string().default('Live'),
});

const updateSchema = Joi.object({
  DeliveryPartner_name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  country: Joi.string().required(),
  postal_code: Joi.string().required(),
  created_at: Joi.date().required(),
  updated_at: Joi.date().required(),
  del_status: Joi.string().default('Live'),
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
