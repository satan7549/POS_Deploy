const mongoose = require('mongoose');

const inventoryAdjustmentIngredientSchema = new Schema({
    
  id: { type: Number, required: true },
  ingredient_id: { type: Number, default: null },
  consumption_amount: { type: Number, default: null },
  inventory_adjustment_id: { type: Number, default: null },
  consumption_status: { type: String, enum: ['Plus', 'Minus', ''], default: null },
  outlet_id: { type: Number, default: null },
  del_status: { type: String, default: 'Active' }
});

const InventoryAdjustmentIngredient = mongoose.model('InventoryAdjustmentIngredient', inventoryAdjustmentIngredientSchema);

module.exports = InventoryAdjustmentIngredient;