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
