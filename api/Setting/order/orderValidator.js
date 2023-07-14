const Joi = require("joi");

const orderSchema = Joi.object({
  persons: Joi.number().min(1).required(),
  waiter: Joi.string().min(3).max(50).required(),
  order_time: Joi.date().required(),
  order_type: Joi.string().valid("Dine_In", "Take_Away", "Delivery").required(),
  table_id: Joi.array().items(Joi.string().required()).required(),
  //foodMenu: Joi.array().items(Joi.string().required()).required(),
  kot_print: Joi.array().items(Joi.string().allow(null)).default(null),
  total_order_price: Joi.number().required(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

const updateSchema = Joi.object({
  persons: Joi.number().min(1).required(),
  waiter: Joi.string().min(3).max(50).required(),
  order_time: Joi.date().required(),
  order_type: Joi.string().valid("Dine_In", "Take_Away", "Delivery").required(),
  table_id: Joi.array().items(Joi.string().required()).required(),
  //foodMenu: Joi.array().items(Joi.string().required()).required(),
  kot_print: Joi.array().items(Joi.string().allow(null)).default(null),
  total_order_price: Joi.number().required(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

function validateOrder(orderData) {
  return orderSchema.validate(orderData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateOrder,
  validateUpdate,
};
