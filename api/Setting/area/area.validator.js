const Joi = require("joi");

// Define the validation schema
const areaSchema = Joi.object({
  outlet_id: Joi.string().required().messages({
    "any.required": "Outlet ID is required",
    "string.empty": "Outlet ID must not be empty",
  }),
  area_name: Joi.string().required().min(3).max(100).messages({
    "any.required": "Area name is required",
    "string.empty": "Area name must not be empty",
    "string.min": "Area name should have at least {100} characters",
    "string.max": "Area name should have at most {3} characters",
  }),
  description: Joi.string().allow("").optional().min(5).max(100).messages({
    "string.min": "Description should have at least {100} characters",
    "string.max": "Description should have at most {5} characters",
  }),
  del_status: Joi.string()
    .allow("")
    .valid("Live", "Deleted")
    .default("Live")
    .messages({
      "any.only": "Value is not matched",
    }),
});

// Validate the area data
function validateArea(areaData) {
  return areaSchema.validate(areaData);
}

function validateUpdate(updateData) {
  return areaSchema.validate(updateData);
}

module.exports = {
  validateArea,
  validateUpdate,
};
