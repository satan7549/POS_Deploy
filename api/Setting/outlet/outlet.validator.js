const Joi = require("joi");

const outletSchema = Joi.object({
  company_id: Joi.string().alphanum().length(24),
  outlet_name: Joi.string().allow(null).default(null),
  outlet_code: Joi.string().allow(null).default(null),
  address: Joi.string().allow(null).default(null),
  phone: Joi.string().allow(null).default(null),
  email: Joi.string().allow(null).default(null),
  default_waiter: Joi.number().allow(null).default(null),
  food_menus: Joi.string(),
  food_menu_prices: Joi.string(),
  delivery_price: Joi.string(),
  has_kitchen: Joi.string().default("No"),
  active_status: Joi.string().default("active"),
  del_status: Joi.string().default("Live"),
  online_self_order_receiving_id: Joi.number().default(0),
});

const updateSchema = Joi.object({
  company_id: Joi.string().alphanum().length(24),
  outlet_name: Joi.string().max(50).allow(null),
  outlet_code: Joi.string().max(10).allow(null),
  address: Joi.string().max(100).allow(null),
  phone: Joi.string().max(50).allow(null),
  email: Joi.string().email().max(50).allow(null),
  default_waiter: Joi.number().integer().allow(null),
  food_menus: Joi.string(),
  food_menu_prices: Joi.string(),
  delivery_price: Joi.string(),
  has_kitchen: Joi.string().valid("Yes", "No").required().default("No"),
  active_status: Joi.string().max(20).default("active"),
  del_status: Joi.string().max(10).default("Live"),
  online_self_order_receiving_id: Joi.number().integer().default(0),
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
