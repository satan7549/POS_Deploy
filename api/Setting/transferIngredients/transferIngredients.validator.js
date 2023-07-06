const Joi = require('joi');

const transferIngredientsSchema = Joi.object({
  
  transfer_type: Joi.number().integer().required().default(1),
  status: Joi.number().integer().allow(null),
  ingredient_id: Joi.number().integer().allow(null),
  quantity_amount: Joi.number().allow(null),
  unit_price: Joi.number().allow(null),
  transfer_id: Joi.number().integer().allow(null),
  from_outlet_id: Joi.number().integer().allow(null),
  to_outlet_id: Joi.number().integer().allow(null),
  total_cost: Joi.number().allow(null),
  single_cost_total: Joi.number().allow(null),
  single_total_tax: Joi.number().allow(null),
  single_total_sale_amount: Joi.number().allow(null),
  total_tax: Joi.number().allow(null),
  total_sale_amount: Joi.number().allow(null),
  del_status: Joi.string().max(10).default('Active')
});


const updateSchema = Joi.object({

    transfer_type: Joi.number().integer().required().default(1),
    status: Joi.number().integer().allow(null),
    ingredient_id: Joi.number().integer().allow(null),
    quantity_amount: Joi.number().allow(null),
    unit_price: Joi.number().allow(null),
    transfer_id: Joi.number().integer().allow(null),
    from_outlet_id: Joi.number().integer().allow(null),
    to_outlet_id: Joi.number().integer().allow(null),
    total_cost: Joi.number().allow(null),
    single_cost_total: Joi.number().allow(null),
    single_total_tax: Joi.number().allow(null),
    single_total_sale_amount: Joi.number().allow(null),
    total_tax: Joi.number().allow(null),
    total_sale_amount: Joi.number().allow(null),
    del_status: Joi.string().max(10).default('Active')
  });

  // Validate the area data
function validateTransferIngredients(transferIngredientsData) {
    return transferIngredientsSchema.validate(transferIngredientsData);
  }

//   // Validate the update data
  function validateUpdate(updateData) {
    return updateSchema.validate(updateData);
  }
  
    module.exports = {
  
      validateTransferIngredients,
      validateUpdate
  
    };
  