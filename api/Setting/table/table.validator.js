let Joi = require("joi");

// Define the validation schema
let tableSchema = Joi.object({

  area_id: Joi.string().required(),
    name: Joi.string().min(5).max(50).required(),
    sit_capacity: Joi.string().min(5).max(50).required(),
    position: Joi.string().min(5).max(50).required(),
    description: Joi.string().min(10).max(100).required(),
    user_id: Joi.string().required(),
    outlet_id: Joi.string().required(),
    del_stype: Joi.string().valid("Live", "Deleted").default("Live"),
});

// Define the validation schema for update data
let updateSchema = Joi.object({

  area_id: Joi.string().required(),
    name: Joi.string().min(5).max(50).required(),
    sit_capacity: Joi.string().min(5).max(50).required(),
    position: Joi.string().min(5).max(50).required(),
    description: Joi.string().min(10).max(100).required(),
    user_id: Joi.string().required(),
    outlet_id: Joi.string().required(),
    del_stype: Joi.string().valid("Live", "Deleted").default("Live"),
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
