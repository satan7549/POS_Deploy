const Joi = require("joi");

const preFoodMadeSchema = Joi.object({
  nameFood: Joi.string().min(5).max(50).required(),
  category: Joi.string().min(5).max(50).required(),
  purchasePrice: Joi.number().required(),
  lowQAmt: Joi.number().required(),
  unit: Joi.string().valid('Gm', 'Kg', 'L', 'Ml', 'Mg').required(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

const updateSchema = Joi.object({
  nameFood: Joi.string().min(5).max(50).required(),
  category: Joi.string().min(5).max(50).required(),
  purchasePrice: Joi.number().required(),
  lowQAmt: Joi.number().required(),
  unit: Joi.string().valid('Gm', 'Kg', 'L', 'Ml', 'Mg').required(),
  del_status: Joi.string().valid("Live", "Deleted").default("Live"),
});

function validatePreFoodMade(preFoodMadeData) {
  return preFoodMadeSchema.validate(preFoodMadeData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}

module.exports = {
    validatePreFoodMade,
  validateUpdate,
};
