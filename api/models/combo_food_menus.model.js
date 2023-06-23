const mongoose = require('mongoose');

const  comboFoodMenuSchema = new mongoose.Schema({

  id: { type: Number, required: true },
  name: { type: String, default: null },
  quantity: { type: Number, default: null },
  food_menu_id: { type: Number, default: null },
  added_food_menu_id: { type: Number, default: null },
  user_id: { type: Number, default: null },
  company_id: { type: Number, default: null },
  del_status: { type: String, default: 'Live' }
});

const ComboFoodMenu = mongoose.model('ComboFoodMenu', comboFoodMenuSchema);

module.exports = ComboFoodMenu;