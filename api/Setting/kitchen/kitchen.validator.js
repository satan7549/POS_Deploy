const Joi = require("joi");

const kitchenSchema = Joi.object({
  name: Joi.string().max(250).allow(null),
  printer_id: Joi.number().integer().allow(null),
  print_server_url: Joi.string().max(250).allow(null),
  company_id: Joi.string().allow(null).required(),
  del_status: Joi.string().max(20).required().default("Live"),
  outlet_id: Joi.string().default(null),
});

let updateSchema = Joi.object({
  name: Joi.string().max(250).allow(null),
  printer_id: Joi.number().integer().allow(null),
  print_server_url: Joi.string().max(250).allow(null),
  company_id: Joi.number().integer().allow(null),
  del_status: Joi.string().max(20).required().default("Live"),
  outlet_id: Joi.number().integer().default(0),
});

// Validate the table data
function validateKitchen(kitchenData) {
  return kitchenSchema.validate(kitchenData);
}

// Validate the update data
function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateKitchen,
  validateUpdate,
};
