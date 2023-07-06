const Joi = require("joi");

const outletSchema = Joi.object({

  company_id: Joi.string().required(),
    outlet_name: Joi.string().min(5).max(50).required(),
    outlet_code: Joi.string().min(5).max(50).required(),
    address: Joi.string().min(10).max(200).required(),
    phone: Joi.number().min(1).max(9999999999).required(),
    email: Joi.string().min(5).max(30).required(),
    default_waiter: Joi.number().min(1).max(9999999999).required(),
    food_menus: Joi.string().min(5).max(50).required(),
    food_menu_prices: Joi.string().min(5).max(50).required(),
    deActivery_price: Joi.string().min(5).max(50).required(),
    has_kitchen: Joi.string().min(5).max(50).required(),
    active_status: Joi.string().min(5).max(50).required(),
    del_status: Joi.string().valid("Active", "Deactive").default("Active"),
    online_self_order_receiving_id: Joi.number().min(1).max(9999999999).required(),
});

const updateSchema = Joi.object({
  
    company_id: Joi.string().required(),
    outlet_name: Joi.string().min(5).max(50).required(),
    outlet_code: Joi.string().min(5).max(50).required(),
    address: Joi.string().min(10).max(200).required(),
    phone: Joi.number().min(1).max(9999999999).required(),
    email: Joi.string().min(5).max(30).required(),
    default_waiter: Joi.number().min(1).max(9999999999).required(),
    food_menus: Joi.string().min(5).max(50).required(),
    food_menu_prices: Joi.string().min(5).max(50).required(),
    deActivery_price: Joi.string().min(5).max(50).required(),
    has_kitchen: Joi.string().min(5).max(50).required(),
    active_status: Joi.string().min(5).max(50).required(),
    del_status: Joi.string().valid("Active", "Deactive").default("Active"),
    online_self_order_receiving_id: Joi.number().min(1).max(9999999999).required(),
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
