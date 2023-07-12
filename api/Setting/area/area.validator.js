const Joi = require("joi");

// Define the validation schema
const areaSchema = Joi.object({
  outlet_id: Joi.string().required().messages({
    "string.base": "Outlet ID should be a string",
    "any.required": "Outlet ID is required",
    "string.empty": "Outlet ID must not be empty",
  }),
  area_name: Joi.string().required().min(3).max(100).messages({
    "string.base": "Area name should be a string",
    "any.required": "Area name is required",
    "string.empty": "Area name must not be empty",
    "string.min": "Area name should have at least {3} characters",
    "string.max": "Area name should have at most {100} characters",
  }),
  description: Joi.string().allow("").optional().min(5).max(200).messages({
    "string.base": "Description should be a string",
    "string.min": "Description should have at least {5} characters",
    "string.max": "Description should have at most {200} characters",
  }),
  del_status: Joi.string()
    .allow("")
    .valid("Live", "Deleted")
    .default("Live")
    .messages({
      "string.base": "Delete status should be a string",
      "any.only": "Invalid delete status value",
    }),
});

// Validate the area data
function validateArea(areaData) {
  const { error, value } = areaSchema.validate(areaData);
  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    throw new Error(errorMessage);
  }
  return value;
}

// Validate the update data
function validateUpdate(updateData) {
  const { error, value } = areaSchema.validate(updateData);
  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    throw new Error(errorMessage);
  }
  return value;
}

module.exports = {
  validateArea,
  validateUpdate,
};
