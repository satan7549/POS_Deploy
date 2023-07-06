const Joi = require('joi');

const requisitionSchema = Joi.object({
  
  transfer_type: Joi.number().integer().required().default(1),
  reference_no: Joi.string().max(50).allow(null).default(null),
  date: Joi.string().max(15).required(),
  received_date: Joi.date().allow(null).default(null),
  note_for_sender: Joi.string().max(300).allow(null).default(null),
  note_for_receiver: Joi.string().max(300).allow(null).default(null),
  user_id: Joi.number().integer().allow(null).default(null),
  outlet_id: Joi.number().integer().allow(null).default(null),
  from_outlet_id: Joi.number().integer().allow(null).default(null),
  to_outlet_id: Joi.number().integer().allow(null).default(null),
  status: Joi.number().integer().allow(null).default(null),
  del_status: Joi.string().max(50).default('Active')
});

const updateSchema = Joi.object({

    transfer_type: Joi.number().integer().required().default(1),
  reference_no: Joi.string().max(50).allow(null).default(null),
  date: Joi.string().max(15).required(),
  received_date: Joi.date().allow(null).default(null),
  note_for_sender: Joi.string().max(300).allow(null).default(null),
  note_for_receiver: Joi.string().max(300).allow(null).default(null),
  user_id: Joi.number().integer().allow(null).default(null),
  outlet_id: Joi.number().integer().allow(null).default(null),
  from_outlet_id: Joi.number().integer().allow(null).default(null),
  to_outlet_id: Joi.number().integer().allow(null).default(null),
  status: Joi.number().integer().allow(null).default(null),
  del_status: Joi.string().max(50).default('Active')

});

// Validate the area data
function validateRequisition(requisitionData) {
    return requisitionSchema.validate(requisitionData);
  }

//   // Validate the update data
  function validateUpdate(updateData) {
    return updateSchema.validate(updateData);
  }
  
    module.exports = {
  
      validateRequisition,
      validateUpdate
  
    };