const mongoose = require('mongoose');

const foodMenuIngredientSchema = new Schema({
  
  id: { type: Number, required: true },
  ingredient_id: { type: Number, default: null },
  consumption: { type: Number, default: null },
  food_menu_id: { type: Number, default: null },
  user_id: { type: Number, default: null },
  company_id: { type: Number, default: null },
  del_status: { type: String, default: 'Live' },
  cost: { type: Number, default: null },
  total: { type: Number, default: null }
});

const FoodMenuIngredient = mongoose.model('FoodMenuIngredient', foodMenuIngredientSchema);

module.exports = FoodMenuIngredient;