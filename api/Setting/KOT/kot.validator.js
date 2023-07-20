const Joi = require("joi");

const kotSchema = Joi.object({
  kot_number: Joi.number().required(),

  waiter_name: Joi.string().min(3).max(50).required().messages({
    "string.min": "Name should have more than 3 characters",
    "string.max": "Maximum 50 characters are permitted",
  }),

  table: Joi.string().required(),

  order: Joi.string().required(),

  cooking_status: Joi.string()
    .valid("requested", "cooking", "done")
    .default("requested")
    .messages({ "any.only": "Value is not matched" }),

  items: Joi.array()
    .items(
      Joi.object({
        food_item: Joi.string().required(),
        quantity: Joi.number().required().default(1),
        customer_comment: Joi.string().allow("").optional().default(null),
      })
    )
    .required(),

  customer_comment_for_all_food: Joi.string()
    .allow("")
    .optional()
    .default(null),

  del_status: Joi.string()
    .valid("Live", "Deleted")
    .default("Live")
    .messages({ "any.only": "Value is not matched" }),
});

function validateKot(kotData) {
  return kotSchema.validate(kotData, { abortEarly: false });
}

module.exports = {
  validateKot,
};
