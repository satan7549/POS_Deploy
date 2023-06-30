const Joi = require("joi");

// Define the validation schema
const areaSchema = Joi.object({
  outlet_id: Joi.string().required(),
  area_name: Joi.string().required(),
  description: Joi.string().allow("").optional(),
  companyId: Joi.number().optional(),
  delStatus: Joi.string().allow("").default("Live"),
});

const updateSchema = Joi.object({
  outlet_id: Joi.string().required(),
  area_name: Joi.string().required(),
  description: Joi.string().allow("").optional(),
  companyId: Joi.number().optional(),
  delStatus: Joi.string().allow("").default("Live"),
});

// Validate the area data
function validateArea(areaData) {
  return areaSchema.validate(areaData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateArea,
  validateUpdate,
};
