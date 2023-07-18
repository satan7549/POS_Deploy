const Joi = require("joi");

const ingredientCategorySchema = Joi.object({
  ingredientCategory_name: Joi.string()
    .min(5)
    .max(50)
    .required()
    .trim()
    .messages({
      "string.base": "ingredientCategory_name must be a string",
      "string.empty": "ingredientCategory_name cannot be empty",
      "string.min":
        "ingredientCategory_name should have at least {#limit} characters",
      "string.max":
        "ingredientCategory_name should have at most {#limit} characters",
      "any.required": "ingredientCategory_name is required",
    }),
  description: Joi.string().max(100).required().trim().messages({
    "string.base": "description must be a string",
    "string.empty": "description cannot be empty",
    "string.min": "description should have at least {#limit} characters",
    "string.max": "description should have at most {#limit} characters",
    "any.required": "description is required",
  }),
  // user_id: Joi.string().required().messages({
  //   "string.base": "user_id must be a string",
  //   "string.empty": "user_id cannot be empty",
  //   "any.required": "user_id is required",
  // }),
  company_id: Joi.string().required().messages({
    "string.base": "company_id must be a string",
    "string.empty": "company_id cannot be empty",
    "any.required": "company_id is required",
  }),
  del_status: Joi.string().valid("Live", "Deleted").default("Live").messages({
    "string.base": "del_status must be a string",
    "string.empty": "del_status cannot be empty",
    "any.only": "del_status must be either 'Live' or 'Deleted'",
  }),
});

const updateSchema = Joi.object({
  ingredientCategory_name: Joi.string()
    .min(5)
    .max(50)
    .required()
    .trim()
    .messages({
      "string.base": "ingredientCategory_name must be a string",
      "string.empty": "ingredientCategory_name cannot be empty",
      "string.min":
        "ingredientCategory_name should have at least {#limit} characters",
      "string.max":
        "ingredientCategory_name should have at most {#limit} characters",
      "any.required": "ingredientCategory_name is required",
    }),
  description: Joi.string().min(10).max(100).required().trim().messages({
    "string.base": "description must be a string",
    "string.empty": "description cannot be empty",
    "string.min": "description should have at least {#limit} characters",
    "string.max": "description should have at most {#limit} characters",
    "any.required": "description is required",
  }),
  // user_id: Joi.string().required().messages({
  //   "string.base": "user_id must be a string",
  //   "string.empty": "user_id cannot be empty",
  //   "any.required": "user_id is required",
  // }),
  company_id: Joi.string().required().messages({
    "string.base": "company_id must be a string",
    "string.empty": "company_id cannot be empty",
    "any.required": "company_id is required",
  }),
  del_status: Joi.string().valid("Live", "Deleted").default("Live").messages({
    "string.base": "del_status must be a string",
    "string.empty": "del_status cannot be empty",
    "any.only": "del_status must be either 'Live' or 'Deleted'",
  }),
});

function validateIngredientCategory(ingredientCategoryData) {
  return ingredientCategorySchema.validate(ingredientCategoryData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateIngredientCategory,
  validateUpdate,
};
