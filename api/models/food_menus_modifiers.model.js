const mongoose = require('mongoose');

const foodMenuModifierSchema = new Schema({
    
    id: { type: Number, required: true },
    modifier_id: { type: Number, default: null },
    food_menu_id: { type: Number, default: null },
    user_id: { type: Number, default: null },
    outlet_id: { type: Number, default: null },
    company_id: { type: Number, default: null },
    del_status: { type: String, default: 'Live' }
});

const FoodMenuModifier = mongoose.model('FoodMenuModifier', foodMenuModifierSchema);

module.exports = FoodMenuModifier;