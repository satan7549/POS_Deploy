const mongoose = require('mongoose');

const promotionSchema = new Schema({
    
  id: { type: Number, required: true },
  title: { type: String, default: null },
  start_date: { type: Date, default: null },
  end_date: { type: Date, default: null },
  type: { type: Number, default: null },
  food_menu_id: { type: String, default: null },
  qty: { type: Number, default: null },
  get_food_menu_id: { type: String, default: null },
  get_qty: { type: Number, default: null },
  discount: { type: String, default: null },
  status: { type: Number, default: 1 },
  outlet_id: { type: Number, default: null },
  user_id: { type: Number, default: null },
  company_id: { type: Number, default: null },
  promotion_code: { type: String, default: null },
  del_status: { type: String, default: 'Live' }
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;