const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = Schema({
  persons: {
    type: String,
    minLength: [1, "Minimum 1 person required"],
    trim: true,
  },

  waiter: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [3, "waiter name should have more than 3 character"],
    trim: true,
  },

  order_time: {
    type: Date,
    default: Date.now,
  },

  order_type: {
    type: String,
    enum: {
      values: ["Dine_In", "Take_Away", "Delivery"],
      message: "Value is not supported",
    },
    required: [true, "please enter order_type"],
    default: "Dine_In",
  },

  table: { type: mongoose.Schema.Types.ObjectId, ref: "Table" },


  kot_print: [
    { type: mongoose.Schema.Types.ObjectId, ref: "kot", default: null },
  ],

  total_order_price: {
    type: Number,
    required: true,
  },

  order_status: {
    type: String,
    enum: {
      values: ["Active", "Running", "Billing", "Settle"],
      message: "Value is not matched",
    },
    default: "Active",
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

module.exports = mongoose.model("Order", orderSchema);
