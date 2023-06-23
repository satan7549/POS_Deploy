const Joi = require('joi');

const outletSchema = Joi.object({
  outlet_name: Joi.string().max(50).allow(null),
  outlet_code: Joi.string().max(10).allow(null),
  address: Joi.string().max(100).allow(null),
  phone: Joi.string().max(50).allow(null),
  email: Joi.string().email().max(50).allow(null),
  default_waiter: Joi.number().integer().allow(null),
  company_id: Joi.number().integer().allow(null),
  food_menus: Joi.string(),
  food_menu_prices: Joi.string(),
  delivery_price: Joi.string(),
  has_kitchen: Joi.string().valid('Yes', 'No').required().default('No'),
  active_status: Joi.string().max(20).default('active'),
  del_status: Joi.string().max(10).default('Live'),
  online_self_order_receiving_id: Joi.number().integer().default(0),
  Company: Joi.string().alphanum().length(24).allow(null)
});

const updateSchema = Joi.object({
  outlet_name: Joi.string().max(50).allow(null),
  outlet_code: Joi.string().max(10).allow(null),
  address: Joi.string().max(100).allow(null),
  phone: Joi.string().max(50).allow(null),
  email: Joi.string().email().max(50).allow(null),
  default_waiter: Joi.number().integer().allow(null),
  company_id: Joi.string().alphanum().length(24).allow(null),
  food_menus: Joi.string(),
  food_menu_prices: Joi.string(),
  delivery_price: Joi.string(),
  has_kitchen: Joi.string().valid('Yes', 'No').required().default('No'),
  active_status: Joi.string().max(20).default('active'),
  del_status: Joi.string().max(10).default('Live'),
  online_self_order_receiving_id: Joi.number().integer().default(0),
  Company: Joi.string().alphanum().length(24).allow(null)
});
function validateOutlet(outletData) {
  return outletSchema.validate(outletData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateOutlet,
  validateUpdate

};