const Joi = require("joi");

const outletSchema = Joi.object({
  company_id: Joi.string().required(),
  outlet_name: Joi.string().min(5).max(50).required(),
  outlet_code: Joi.string().min(5).max(50).required(),
  address: Joi.string().min(10).max(200).required(),
  phone: Joi.number().min(1000000000).max(9999999999).required(),
  email: Joi.string().min(5).max(30).required(),
  default_waiter: Joi.number().required(),
  food_menus: Joi.array().items(Joi.string()),
  active_status: Joi.string().min(5).max(50).required(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

const updateSchema = Joi.object({
  company_id: Joi.string().required(),
  outlet_name: Joi.string().min(5).max(50).required(),
  outlet_code: Joi.string().min(5).max(50).required(),
  address: Joi.string().min(10).max(200).required(),
  phone: Joi.number().min(1000000000).max(9999999999).required(),
  email: Joi.string().min(5).max(30).required(),
  default_waiter: Joi.number().required(),
  food_menus: Joi.array().items(Joi.string()),
  active_status: Joi.string().min(5).max(50).required(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

function validateOutlet(outletData) {
  return outletSchema.validate(outletData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateOutlet,
  validateUpdate,
};
