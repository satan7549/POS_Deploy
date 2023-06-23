const mongoose = require('mongoose');

const kitchenCategorySchema = new Schema({
  
  id: { type: Number, required: true },
  kitchen_id: { type: Number, default: null },
  cat_id: { type: Number, default: null },
  via_printer: { type: Number, default: null },
  del_status: { type: String, required: true, default: 'Live' },
  outlet_id: { type: Number, required: true, default: 0 }
});

const KitchenCategory = mongoose.model('KitchenCategory', kitchenCategorySchema);

module.exports = KitchenCategory;