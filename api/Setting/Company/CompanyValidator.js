const Joi = require("joi");

const companySchema = Joi.object({
  name: Joi.string().min(3).max(30).required().trim().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Company name should have at least {#limit} characters",
    "string.max": "Company name can have at most {#limit} characters",
    "any.required": "Name is required",
  }),
  outlets: Joi.array().items(
    Joi.string().required().messages({
      "string.base": "Outlet must be a string",
      "string.empty": "Outlet is required",
      "any.required": "Outlet is required",
    })
  ),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

const updateSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().trim().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Company name should have at least {#limit} characters",
    "string.max": "Company name can have at most {#limit} characters",
    "any.required": "Name is required",
  }),
  outlets: Joi.array().items(
    Joi.string().required().messages({
      "string.base": "Outlet must be a string",
      "string.empty": "Outlet is required",
      "any.required": "Outlet is required",
    })
  ),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

function validateCompany(companyData) {
  return companySchema.validate(companyData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateCompany,
  validateUpdate,
};
