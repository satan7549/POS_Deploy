const Joi = require('joi');

// Define the validation schema
const attendenceSchema = Joi.object({
  // id: Joi.number().required(),
  reference_no: Joi.string().default(null),
  employee_id: Joi.number().default(null),
  date: Joi.date().default(null),
  in_time: Joi.string().default(null),
  out_time: Joi.string().default(null),
  note: Joi.string().default(null),
  user_id: Joi.number().default(null),
  company_id: Joi.number().default(null),
  del_status: Joi.string().default('Live'),
  is_closed: Joi.number().required().default(2)
});

// const updateSchema = Joi.object({
//   outletId: Joi.number().required(),
//   areaName: Joi.string().required(),
//   description: Joi.string().allow('').optional(),
//   companyId: Joi.number().optional(),
//   delStatus: Joi.string().allow('').default('Live')
// });  

// Validate the area data
function validateAttendance(attendenceData) {
  return attendenceSchema.validate(attendenceData);
}

// function validateUpdate(updateData) {
//   return updateSchema.validate(updateData);
// }


module.exports = {
  validateAttendance
  // validateUpdate
  
};