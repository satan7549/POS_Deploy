const Joi = require('joi');

const orderSchema = Joi.object({

  persons: Joi.string().required(),
  waiter: Joi.string().required(),
  order_time: Joi.date().required(),
  order_type: Joi.string().required(),
  table_id: Joi.string().required(null),
  del_status: Joi.string().default('Live')
});

const updateSchema = Joi.object({
    persons: Joi.string().required(),
    waiter: Joi.string().required(),
    order_time: Joi.date().required(),
    order_type: Joi.string().required(),
    table_id: Joi.string().required(null),
    del_status: Joi.string().default('Live')
});

function validateOrder(orderData) {
  return orderSchema.validate(orderData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateOrder,
  validateUpdate
};
