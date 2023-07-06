const Joi = require('joi');

const transferSchema = Joi.object({
  
  transfer_type: Joi.number().integer().required().default(1),
  reference_no: Joi.string().max(50).allow(null),
  date: Joi.string().required(),
  received_date: Joi.date().allow(null),
  note_for_sender: Joi.string().max(300).allow(null),
  note_for_receiver: Joi.string().max(300).allow(null),
  user_id: Joi.number().integer().allow(null),
  outlet_id: Joi.number().integer().allow(null),
  from_outlet_id: Joi.number().integer().allow(null),
  to_outlet_id: Joi.number().integer().allow(null),
  status: Joi.number().integer().allow(null),
  del_status: Joi.string().max(50).default('Active')
});

const updateSchema = Joi.object({
  
    transfer_type: Joi.number().integer().required().default(1),
    reference_no: Joi.string().max(50).allow(null),
    date: Joi.string().required(),
    received_date: Joi.date().allow(null),
    note_for_sender: Joi.string().max(300).allow(null),
    note_for_receiver: Joi.string().max(300).allow(null),
    user_id: Joi.number().integer().allow(null),
    outlet_id: Joi.number().integer().allow(null),
    from_outlet_id: Joi.number().integer().allow(null),
    to_outlet_id: Joi.number().integer().allow(null),
    status: Joi.number().integer().allow(null),
    del_status: Joi.string().max(50).default('Active')
  });
  


// Validate the area data
function validateTransfer(transferData) {
    return transferSchema.validate(transferData);
  }

//   // Validate the update data
  function validateUpdate(updateData) {
    return updateSchema.validate(updateData);
  }
  
    module.exports = {
  
      validateTransfer,
      validateUpdate
  
    };
    