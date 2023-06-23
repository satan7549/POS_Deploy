const Joi = require('joi');

// Define the validation schema
const accessSchema = Joi.object({
//   id: Joi.number().required(),
  module_name: Joi.string().default(null),
  function_name: Joi.string().default(null),
  label_name: Joi.string().default(null),
  parent_id: Joi.number().default(0),
  main_module_id: Joi.number().default(null),
  del_status: Joi.string().default('Live')
});

// const updateSchema = Joi.object({
//   outletId: Joi.number().required(),
//   areaName: Joi.string().required(),
//   description: Joi.string().allow('').optional(),
//   companyId: Joi.number().optional(),
//   delStatus: Joi.string().allow('').default('Live')
// });  

// Validate the area data
function validateAccess(accessData) {
  return accessSchema.validate(accessData);
}

// function validateUpdate(updateData) {
//   return updateSchema.validate(updateData);
// }


module.exports = {
  validateAccess
//   validateUpdate
  
};