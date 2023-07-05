const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const outletSchema = Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    require: [true, "please enter company_id"],
  },

  outlet_name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "outlet_name should have more than 5 character"],
    required: [true, "please enter outlet_name"],
    trim: true,
    default: null,
  },

  outlet_code: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "outlet_name should have more than 5 character"],
    required: [true, "please enter outlet_name"],
    trim: true,
    default: null,
    unique: true,
  },

  address: {
    type: String,
    maxlength: [200, "Maximum 200 charcters are permitted"],
    minLength: [10, "address should have more than 10 character"],
    required: [true, "please enter address"],
    trim: true,
    default: null,

  },
  phone: {
    type: Number,
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
