const Joi = require('joi');

const roleSchema = Joi.object({
  role_name: Joi.string().allow(null).default(null),
  del_status: Joi.string().required().default('Active'),
  company_id: Joi.number().allow(null).default(null)
});

let updateSchema = Joi.object({
    role_name: Joi.string().allow(null).default(null),
    del_status: Joi.string().required().default('Active'),
    company_id: Joi.number().allow(null).default(null)
  });
  
function validateRole(roleData) {
    return roleSchema.validate(roleData);
  }

  function validateUpdate(updateData) {
    return updateSchema.validate(updateData);
  }

  module.exports = {
    validateRole,
    validateUpdate
    
  };