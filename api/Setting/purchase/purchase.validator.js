const Joi = require('joi');

// Define the validation schema
const purchaseSchema = Joi.object({

  
    
    reference_no: Joi.string().max(50).allow(null),
    supplier_id: Joi.number().integer().allow(null),
    date: Joi.string().required(),
    subtotal: Joi.number().allow(null),
    other: Joi.number().allow(null),
    grand_total: Joi.number().allow(null),
    paid: Joi.number().allow(null),
    due: Joi.number().allow(null),
    note: Joi.string().max(200).allow(null),
    user_id: Joi.number().integer().allow(null),
    outlet_id: Joi.number().integer().allow(null),
    added_date_time: Joi.date().required().default(Date.now),
    payment_id: Joi.number().integer().required().default(0),
    del_status: Joi.string().max(50).default('Live')
  });
  


 const updateSchema = Joi.object({

  
    
    reference_no: Joi.string().max(50).allow(null),
    supplier_id: Joi.number().integer().allow(null),
    date: Joi.string().required(),
    subtotal: Joi.number().allow(null),
    other: Joi.number().allow(null),
    grand_total: Joi.number().allow(null),
    paid: Joi.number().allow(null),
    due: Joi.number().allow(null),
    note: Joi.string().max(200).allow(null),
    user_id: Joi.number().integer().allow(null),
    outlet_id: Joi.number().integer().allow(null),
    added_date_time: Joi.date().required().default(Date.now),
    payment_id: Joi.number().integer().required().default(0),
    del_status: Joi.string().max(50).default('Live')
  });
  
   
   
// Validate the area data
function validatePurchase(purchaseData) {
    return purchaseSchema.validate(purchaseData);
  }


  // Validate the update data
function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

  module.exports = {

    validatePurchase,
    validateUpdate

  };
  