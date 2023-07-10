const Joi = require("joi");


const ingredientUnitSchema = Joi.object({

  ingredientUnit_name: Joi.string().max(50).min(5).required()
    .messages({
      'string.max': 'Maximum 50 characters are permitted',
      'string.min': 'ingredientUnit_name should have more than 5 characters',
      'any.required': 'Please enter ingredientUnit_name',
    }),
  description: Joi.string().max(200).required()
  .messages({
    'string.max': 'Maximum 200 characters are permitted',
  }),
  company_id: Joi.required()
    .messages({
      'any.required': 'Please enter company_id',
    }),
  del_status: Joi.string().valid('Live', 'Deleted').default('Live'),
});




const updateSchema = Joi.object({
  ingredientUnit_name: Joi.string().max(50).min(5).required()
    .messages({
      'string.max': 'Maximum 50 characters are permitted',
      'string.min': 'ingredientUnit_name should have more than 5 characters',
      'any.required': 'Please enter ingredientUnit_name',
    }),
  description: Joi.string().max(200).required()
    .messages({
      'string.max': 'Maximum 200 characters are permitted',
    }),
  company_id: Joi.required()
    .messages({
      'any.required': 'Please enter company_id',
    }),
  del_status: Joi.string().valid('Live', 'Deleted').default('Live'),
})

function validateIngredientUnit(ingredientUnitSchemaData) {
  return ingredientUnitSchema.validate(ingredientUnitSchemaData);
}
function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}
module.exports = {
  validateIngredientUnit,
  validateUpdate,
};
