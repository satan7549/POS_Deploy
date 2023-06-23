const Joi = require('joi');

const purchaseIngredientsSchema = Joi.object({
  

  ingredient_id: Joi.number().integer().allow(null),
  unit_price: Joi.number().allow(null),
  quantity_amount: Joi.number().allow(null),
  total: Joi.number().allow(null),
  purchase_id: Joi.number().integer().allow(null),
  outlet_id: Joi.number().integer().allow(null),
  del_status: Joi.string().max(10).default('Live'),
  cost_per_unit: Joi.number().required().default(0)
});


const updateSchema = Joi.object({
  

    ingredient_id: Joi.number().integer().allow(null),
    unit_price: Joi.number().allow(null),
    quantity_amount: Joi.number().allow(null),
    total: Joi.number().allow(null),
    purchase_id: Joi.number().integer().allow(null),
    outlet_id: Joi.number().integer().allow(null),
    del_status: Joi.string().max(10).default('Live'),
    cost_per_unit: Joi.number().required().default(0)
  });

  // Validate the area data
function validatePurchaseIngredients(purchaseIngredientsData) {
    return purchaseIngredientsSchema.validate(purchaseIngredientsData);
  }

//   // Validate the update data
  function validateUpdate(updateData) {
    return updateSchema.validate(updateData);
  }
  
    module.exports = {
  
      validatePurchaseIngredients,
      validateUpdate
  
    };