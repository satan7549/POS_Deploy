let Joi = require("joi");

// Define the validation schema
let tableSchema = Joi.object({
  area_id: Joi.string().required(),
  name: Joi.string().required(),
  sit_capacity: Joi.string().required(),
  position: Joi.string().optional(),
  description: Joi.string().required(),
  user_id: Joi.string().required(),
  outlet_id: Joi.string().required(),
  // company_id: Joi.number().required(),
  del_status: Joi.string().required(),
});

// Define the validation schema for update data
let updateSchema = Joi.object({
  area_id: Joi.string().required(),
  name: Joi.string().required(),
  sit_capacity: Joi.string().required(),
  position: Joi.string().optional(),
  description: Joi.string().required(),
  user_id: Joi.string().required(),
  outlet_id: Joi.string().required(),
  // company_id: Joi.number().required(),
  del_status: Joi.string().required(),
});

// Validate the table data
function validateTable(tableData) {
  return tableSchema.validate(tableData);
}

// Validate the update data
function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateTable,
  validateUpdate,
};
