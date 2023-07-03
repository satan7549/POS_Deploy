const mongoose = require("mongoose");

const kitchenSalesDetailSchema = new Schema({
  id: { type: Number, required: true },
  food_menu_id: { type: Number, default: null },
  menu_name: { type: String, default: null },
  qty: { type: Number, default: null },
  tmp_qty: { type: Number, default: null },
  menu_price_without_discount: { type: Number, required: true },
  menu_price_with_discount: { type: Number, required: true },
  menu_unit_price: { type: Number, required: true },
  menu_vat_percentage: { type: Number, required: true },
  menu_taxes: { type: String },
  menu_discount_value: { type: String, default: null },
  discount_type: { type: String, required: true },
  menu_note: { type: String, default: null },
  menu_combo_items: { type: String },
  discount_amount: { type: Number, default: null },
  item_type: { type: String, default: null },
  cooking_status: { type: String, default: null },
  cooking_start_time: { type: String, default: "" },
  cooking_done_time: { type: String, default: "" },
  previous_id: { type: Number, required: true },
  loyalty_point_earn: { type: Number, default: 0 },
  sales_id: { type: Number, default: null },
  order_status: {
    type: Number,
    required: true,
    comment: "1=new order,2=invoiced order, 3=closed order",
  },
  user_id: { type: Number, default: null },
  outlet_id: { type: Number, default: null },
  is_free_item: { type: Number, required: true, default: 0 },
  is_print: { type: Number, required: true, default: 1 },
  del_status: { type: String, default: "Live" },
});

const KitchenSalesDetail = mongoose.model(
  "KitchenSalesDetail",
  kitchenSalesDetailSchema
);

module.exports = KitchenSalesDetail;
