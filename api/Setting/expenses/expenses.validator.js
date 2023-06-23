const Joi = require('joi');

const expensesSchema = Joi.object({
    // id: Joi.number().integer().required(),
    date: Joi.date().allow(null),
    amount: Joi.number().allow(null),
    category_id: Joi.number().integer().allow(null),
    employee_id: Joi.number().integer().allow(null),
    note: Joi.string().max(200).allow(null),
    user_id: Joi.number().integer().allow(null),
    outlet_id: Joi.number().integer().allow(null),
    payment_id: Joi.number().integer().default(0),
    added_date_time: Joi.date().timestamp().required(),
    del_status: Joi.string().valid('Live').default('Live')
});

const updateSchema = Joi.object({
  date: Joi.date().allow(null),
  amount: Joi.number().allow(null),
  category_id: Joi.number().integer().allow(null),
  employee_id: Joi.number().integer().allow(null),
  note: Joi.string().max(200).allow(null),
  user_id: Joi.number().integer().allow(null),
  outlet_id: Joi.number().integer().allow(null),
  payment_id: Joi.number().integer().default(0),
  added_date_time: Joi.date().timestamp().required(),
  del_status: Joi.string().valid('Live').default('Live')
  });

// Validate the area data
function validateExpenses(expensesData) {
    return expensesSchema.validate(expensesData);
  }
  
  function validateUpdate(updateData) {
    return updateSchema.validate(updateData);
  }
  module.exports = {
    validateExpenses,
    validateUpdate
    
  };