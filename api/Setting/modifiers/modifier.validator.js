const Joi = require("joi");

const modifierSchema = Joi.object({
  name: Joi.string().max(50).min(5).required().messages({
    "string.max": "Maximum 50 characters are permitted",
    "string.min": "name should have more than 5 characters",
    "any.required": "Please enter modifier_name",
  }),

  ingredients: Joi.array().items(
    Joi.object({
      ingredient: Joi.string()
        .required()
        .messages({ "any.required": "Please enter ingredient" }),

      quantity: Joi.number().max(10).min(1).required().messages({
        "number.max": "Maximum 10 characters are permitted",
        "number.min": "quantity should have more than 1 character",
        "any.required": "Please enter quantity",
      }),
    })
  ),

  price: Joi.number().required().messages({
    "any.required": "Please enter a modifier_price",
  }),

  description: Joi.string().max(100).trim().default(null),

  company_id: Joi.string().required().messages({
    "any.required": "Please enter Company_id",
  }),

<<<<<<< HEAD
  foodCategory: Joi.string().required().messages({
    "string.base": "FoodCategory ID must be a string",
    "string.empty": "FoodCategory ID is required",
    "any.required": "FoodCategory enter a company ID",
  }),

  // tax_information: Joi.string().min(10).max(100).required().trim().messages({
  //   "string.base": "Tax information must be a string",
  //   "string.empty": "Tax information is required",
  //   "string.min": "Tax information should have at least {#limit} characters",
  //   "string.max": "Tax information can have at most {#limit} characters",
  //   "any.required": "Please enter tax information",
  // }),

  // tax_string: Joi.string().min(10).max(250).required().trim().messages({
  //   "string.base": "Tax string must be a string",
  //   "string.empty": "Tax string is required",
  //   "string.min": "Tax string should have at least {#limit} characters",
  //   "string.max": "Tax string can have at most {#limit} characters",
  //   "any.required": "Please enter a tax string",
  // }),

=======
>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
  total_cost: Joi.number().required().messages({
    "any.required": "Please enter a total_cost",
  }),

  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});



const updateSchema = Joi.object({
  name: Joi.string().max(50).min(5).required().messages({
    "string.max": "Maximum 50 characters are permitted",
    "string.min": "name should have more than 5 characters",
    "any.required": "Please enter modifier_name",
  }),

  ingredients: Joi.array().items(
    Joi.object({
      ingredient: Joi.string()
        .required()
        .messages({ "any.required": "Please enter ingredient" }),

      quantity: Joi.number().max(10).min(1).required().messages({
        "number.max": "Maximum 10 characters are permitted",
        "number.min": "quantity should have more than 1 character",
        "any.required": "Please enter quantity",
      }),
    })
  ),

  price: Joi.number().required().messages({
    "any.required": "Please enter a modifier_price",
  }),


  description: Joi.string().max(100).trim().default(null),


  company_id: Joi.string().required().messages({
<<<<<<< HEAD
    "string.base": "Company ID must be a string",
    "string.empty": "Company ID is required",
    "any.required": "Please enter a company ID",
  }),

  foodCategory: Joi.string().required().messages({
    "string.base": "FoodCategory ID must be a string",
    "string.empty": "FoodCategory ID is required",
    "any.required": "FoodCategory enter a company ID",
  }),

  tax_information: Joi.string().min(10).max(100).required().trim().messages({
    "string.base": "Tax information must be a string",
    "string.empty": "Tax information is required",
    "string.min": "Tax information should have at least {#limit} characters",
    "string.max": "Tax information can have at most {#limit} characters",
    "any.required": "Please enter tax information",
  }),

  tax_string: Joi.string().min(10).max(250).required().trim().messages({
    "string.base": "Tax string must be a string",
    "string.empty": "Tax string is required",
    "string.min": "Tax string should have at least {#limit} characters",
    "string.max": "Tax string can have at most {#limit} characters",
    "any.required": "Please enter a tax string",
=======
>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
    "any.required": "Please enter Company_id",
  }),

  total_cost: Joi.number().required().messages({
    "any.required": "Please enter a total_cost",
  }),

  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

function validateModifier(modifierData) {
  return modifierSchema.validate(modifierData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
  validateModifier,
  validateUpdate,
};
