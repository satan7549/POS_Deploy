const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const outletSchema = Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    require: true,
  },
  outlet_name: {
    type: String,
    default: null,
  },
  outlet_code: {
    type: String,
    default: null,
    unique: true,
  },
  address: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  default_waiter: {
    type: Number,
    default: null,
  },
  food_menus: {
    type: String,
  },
  food_menu_prices: {
    type: String,
  },
  delivery_price: {
    type: String,
  },
  has_kitchen: {
    type: String,
    default: "No",
  },
  active_status: {
    type: String,
    default: "active",
  },
  del_status: {
    type: String,
    default: "Live",
  },
  online_self_order_receiving_id: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Outlet", outletSchema);
