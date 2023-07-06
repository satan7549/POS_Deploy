const mongoose = require('mongoose');

const purchaseIngredientsSchema = new mongoose.Schema({
  
  ingredient_id: {
    type: Number,
    default: null
  },
  unit_price: {
    type: Number,
    default: null
  },
  quantity_amount: {
    type: Number,
    default: null
  },
  total: {
    type: Number,
    default: null
  },
  purchase_id: {
    type: Number,
    default: null
  },
  outlet_id: {
    type: Number,
    default: null
  },
  del_status: {
    type: String,
    default: 'Active'
  },
  cost_per_unit: {
    type: Number,
    required: true,
    default: 0
  }
});

const PurchaseIngredient = mongoose.model('PurchaseIngredient', purchaseIngredientsSchema);

module.exports = PurchaseIngredient;