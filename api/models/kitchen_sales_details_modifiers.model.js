const mongoose = require("mongoose");

const kitchenSalesDetailsModifiersSchema = new Schema({
  id: { type: Number, required: true },
  modifier_id: { type: Number, required: true },
  modifier_price: { type: Number, required: true },
  food_menu_id: { type: Number, required: true },
  sales_id: { type: Number, required: true },
  order_status: {
    type: Number,
    required: true,
    comment: "1=new order,2=invoiced order, 3=closed order",
  },
  sales_details_id: { type: Number, required: true },
  menu_vat_percentage: { type: Number, default: null },
  menu_taxes: { type: String },
  user_id: { type: Number, required: true },
  outlet_id: { type: Number, required: true },
  customer_id: { type: Number, required: true },
  is_print: { type: Number, required: true, default: 1 },
});

const KitchenSalesDetailsModifiers = mongoose.model(
  "KitchenSalesDetailsModifiers",
  kitchenSalesDetailsModifiersSchema
);

module.exports = KitchenSalesDetailsModifiers;
