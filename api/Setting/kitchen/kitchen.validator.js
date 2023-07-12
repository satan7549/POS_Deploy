const Joi = require("joi");

const kitchenJoiSchema = Joi.object({
  kitchen_name: Joi.string().min(3).max(50).required().trim().messages({
    "string.base": "Kitchen name should be a string",
    "string.empty": "Kitchen name is required",
    "string.min": "Kitchen name should have at least {3} characters",
    "string.max": "Kitchen name should have at most {50} characters",
    "any.required": "Kitchen name is required",
  }),
  code: Joi.number().required().messages({
    "number.base": "Code should be a number",
    "any.required": "Code is required",
  }),
  kitchen_area: Joi.string().required().messages({
    "string.base": "Kitchen area should be a string",
    "string.empty": "Kitchen area is required",
    "any.required": "Kitchen area is required",
  }),
  outlet: Joi.string().required().messages({
    "string.base": "Outlet should be a string",
    "string.empty": "Outlet is required",
    "any.required": "Outlet is required",
  }),
  del_status: Joi.string().valid("Live", "Deleted").default("Live").messages({
    "string.base": "Del status should be a string",
    "any.only": 'Del status should be either "Live" or "Deleted"',
  }),
});

const validateKitchen = (kitchen, isUpdate = false) => {
  let schema;
  if (isUpdate) {
    schema = kitchenJoiSchema.fork(
      ["kitchen_name", "code", "kitchen_area", "outlet", "del_status"],
      (schema) => schema.optional()
    );
  } else {
    schema = kitchenJoiSchema;
  }

  return schema.validate(kitchen, { abortEarly: false });
};

module.exports = {
  validateKitchen,
};
