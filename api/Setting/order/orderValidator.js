const Joi = require("joi");

const orderSchema = Joi.object({
  persons: Joi.string().required(),
  waiter: Joi.string().required(),
  order_time: Joi.date().required(),
  order_type: Joi.string().valid("Dine_In", "Take_Away", "Delivery").required(),
  table_id: Joi.array().items(Joi.string().required()).required(),
  foodMenu: Joi.array().items(Joi.string().required()).required(),
  del_status: Joi.string().default("Live"),
});

const updateSchema = Joi.object({
  persons: Joi.string().required(),
  waiter: Joi.string().required(),
  order_time: Joi.date().required(),
  order_type: Joi.string().valid("Dine_In", "Take_Away", "Delivery").required(),
  table_id: Joi.array().items(Joi.string().required()).required(),
  foodMenu: Joi.array().items(Joi.string().required()).required(),
  del_status: Joi.string().default("Live"),
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
