const Joi = require("joi");

const roleSchema = Joi.object({
    role_name: Joi.string().max(50).min(3).required()
      .messages({
        'string.max': 'Maximum 50 characters are permitted',
        'string.min': 'role_name should have more than 3 characters',
        'any.required': 'Please enter role_name',
      }),
  
    description: Joi.string().max(200).required()
      .messages({
        'string.max': 'Maximum 200 characters are permitted',
        'any.required': 'Please enter RoleDescription',
      }),
  
    whoCreate: Joi.string().max(50).min(3)
      .messages({
        'string.max': 'Maximum 50 characters are permitted',
        'string.min': 'whoCreate should have more than 5 characters',
      }),
  
    company_id: Joi.string().required().messages({
      'number.base': 'Company ID must be a number',
      'any.required': 'Please enter company_id',
    }),
  
    createdAt: Joi.date().default(Date.now),
  
    del_status: Joi.string().valid('Live', 'Deleted').default('Live'),
  });



const updateSchema = Joi.object({
  
    role_name: Joi.string().max(50).min(3).required()
    .messages({
      'string.max': 'Maximum 50 characters are permitted',
      'string.min': 'role_name should have more than 5 characters',
      'any.required': 'Please enter role_name',
    }),

  description: Joi.string().max(200).required()
    .messages({
      'string.max': 'Maximum 200 characters are permitted',
      'string.min': 'RoleDescription should have more than 10 characters',
      'any.required': 'Please enter RoleDescription',
    }),

  whoCreate: Joi.string().max(50).min(3)
    .messages({
      'string.max': 'Maximum 50 characters are permitted',
      'string.min': 'whoCreate should have more than 5 characters',
    }),

  company_id: Joi.string().required().messages({
    'number.base': 'Company ID must be a number',
    'any.required': 'Please enter company_id',
  }),

  createdAt: Joi.date().default(Date.now),

  del_status: Joi.string().valid('Live', 'Deleted').default('Live'),
})

function validateRole(RoleData) {
  return roleSchema.validate(RoleData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateRole,
  validateUpdate,
};
