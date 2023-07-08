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
    required: [true, "please enter outlet_name"],
    trim: true,
    unique: true,
  },

  outlet_code: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "outlet_code should have more than 5 character"],
    required: [true, "please enter outlet_code"],
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
    min: [1000000000, "phone number should be equal 10 digit"],
    max: [9999999999, "phone number should be equal 10 digit"],
    required: [true, "Please enter phone"],
    default: null,
    unique: true,
  },

  email: {
    type: String,
    required: [true, "please enter email"],
    trim: true,
    default: null,
    unique: true,
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
    maxlength: [50, "Maximum 50 characters are permitted"],
    minlength: [5, "active_status should have more than 5 characters"],
    required: [true, "Please enter active_status"],
    trim: true,
    default: "active",
  },

  del_status: {
    type: String,
    enum: {
      values: ["Live", "Deleted"],
      message: "Values is not matched",
    },
    default: "Live",
  },
});

module.exports = mongoose.model("Outlet", outletSchema);
