const Joi = require('joi');

const printerSchema = Joi.object({
 
  path: Joi.string().max(300).allow(null),
  title: Joi.string().max(250).allow(null),
  type: Joi.string().max(100).allow(null),
  profile_: Joi.string().max(100).allow(null),
  characters_per_line: Joi.number().integer().allow(null),
  printer_ip_address: Joi.string().max(20).allow(null),
  printer_port: Joi.string().max(20).allow(null),
  company_id: Joi.number().integer().allow(null),
  del_status: Joi.string().max(10).required().default('Live')
});


let updateSchema = Joi.object({

    path: Joi.string().max(300).allow(null),
  title: Joi.string().max(250).allow(null),
  type: Joi.string().max(100).allow(null),
  profile_: Joi.string().max(100).allow(null),
  characters_per_line: Joi.number().integer().allow(null),
  printer_ip_address: Joi.string().max(20).allow(null),
  printer_port: Joi.string().max(20).allow(null),
  company_id: Joi.number().integer().allow(null),
  del_status: Joi.string().max(10).required().default('Live')

});


// Validate the table data
function validatePrinter(printerData) {
    return printerSchema.validate(printerData);
  }

  // Validate the update data
function validateUpdate(updateData) {
    return updateSchema.validate(updateData);
  }

  module.exports = {
    validatePrinter,
    validateUpdate
    
  };
  


