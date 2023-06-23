const Joi = require('joi');

const kitchenSalesSchema = Joi.object({
    delivery_partner_id: Joi.number().integer().allow(null).default(null),
    status: Joi.string().required().default('Pending'),
    split_sale_id: Joi.number().integer().allow(null).default(null),
    order_receiving_id: Joi.number().integer().required().default(0)
}); 

const updateSchema = Joi.object({
  delivery_partner_id: Joi.number().integer().allow(null).default(null),
  status: Joi.string().required().default('Pending'),
  split_sale_id: Joi.number().integer().allow(null).default(null),
  order_receiving_id: Joi.number().integer().required().default(0)
}); 

function validateKitchenSales(kitchenSalesData) {
    return kitchenSalesSchema.validate(kitchenSalesData);
  }

  function validateUpdate(updateData) {
    return updateSchema.validate(updateData);
  }

  module.exports = {
    validateKitchenSales,
    validateUpdate
  };