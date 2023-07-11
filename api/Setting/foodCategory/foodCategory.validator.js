const Joi = require("joi");

const foodCategorySchema = Joi.object({

  name: Joi.string().trim().required().min(3).max(100).messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Food category name should have at least {#limit} characters",
    "string.max": "Food category name can't exceed {#limit} characters",
    "any.required": "Name is required",
  }),
  description: Joi.string().required().trim().min(10).max(500).messages({
    "string.base": "Description must be a string",
    "string.empty": "Description is required",
    "string.min":
      "Food category description should have at least {#limit} characters",
    "string.max": "Food category description can't exceed {#limit} characters",
    "any.required": "Description is required",
  }),
  createdAt: Joi.date().default(Date.now),
  updatedAt: Joi.date().default(Date.now),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

const updateSchema = Joi.object({
    
  name: Joi.string().trim().required().min(3).max(100).messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Food category name should have at least {#limit} characters",
    "string.max": "Food category name can't exceed {#limit} characters",
    "any.required": "Name is required",
  }),
  description: Joi.string().required().trim().min(10).max(500).messages({
    "string.base": "Description must be a string",
    "string.empty": "Description is required",
    "string.min":
      "Food category description should have at least {#limit} characters",
    "string.max": "Food category description can't exceed {#limit} characters",
    "any.required": "Description is required",
  }),
  createdAt: Joi.date().default(Date.now),
  updatedAt: Joi.date().default(Date.now),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

function validateFoodCategory(foodCategoryData) {
  return foodCategorySchema.validate(foodCategoryData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateFoodCategory,
  validateUpdate,
};
