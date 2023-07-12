const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const outletSchema = Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: [true, "Please enter company_id"],
  },
  outlet_name: {
    type: String,
    maxlength: [100, "Maximum 100 characters are permitted"],
    required: [true, "Please enter outlet_name"],
    trim: true,
    unique: true,
  },
  outlet_code: {
    type: String,
    maxlength: [50, "Maximum 50 characters are permitted"],
    minLength: [5, "outlet_code should have more than 5 characters"],
    required: [true, "Please enter outlet_code"],
    trim: true,
    default: null,
    unique: true,
  },
  address: {
    type: String,
    maxlength: [200, "Maximum 200 characters are permitted"],
    minLength: [10, "address should have more than 10 characters"],
    required: [true, "Please enter address"],
    trim: true,
    default: null,
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    trim: true,
    default: null,
    unique: true,
  },
  phone: {
    type: Number,
    min: [1000000000, "phone number should be equal to 10 digits"],
    max: [9999999999, "phone number should be equal to 10 digits"],
    required: [true, "Please enter phone"],
    default: null,
  },
  default_waiter: {
    type: Number,
    required: [true, "Please enter waiters"],
    default: null,
  },
  food_menus: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodMenu",
    },
  ],
  active_status: {
    type: String,
    enum: {
      values: ["active", "notactive"],
      message: "Value is not matched",
    },
    required: [true, "Please enter active_status"],
    trim: true,
    default: "active",
  },
  del_status: {
    type: String,
    enum: {
      values: ["Live", "Deleted"],
      message: "Value is not matched",
    },
    default: "Live",
  },
});

module.exports = mongoose.model("Outlet", outletSchema);
