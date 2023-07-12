const Joi = require("joi");

// Define the validation schema
const kotSchema = Joi.object({
  kot_number: Joi.number().required(),
  waiter_name: Joi.string().required(),
  table: Joi.string().required(),
  order: Joi.string().required(),
  cooking_status: Joi.string().valid("cooking", "done").required().messages({
    "any.only": "Cooking status must be either 'cooking' or 'done'",
  }),
  items: Joi.array()
    .items(
      Joi.object({
        food_item: Joi.string().required(),
        customer_comment: Joi.string().allow("").optional(),
      })
    )
    .required(),
  customer_comment_for_all_food: Joi.string().allow("").optional(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live").messages({
    "any.only": "Value is not matched",
  }),
});

// Validate the KOT data
function validateKot(kotData) {
  return kotSchema.validate(kotData);
}

module.exports = {
  validateKot,
};
