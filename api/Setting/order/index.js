const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = Schema({

  persons: {
    type: String,
    required: true,
  },
  waiter: {
    type: String,
    required: true,
  },
  order_time: {
    type: Date,
    required: true,
  },
  order_type: {
    type: String,
    enum: {
      values: ["Dine_In", "Take_Away", "Delivery"],
      message: `Value is not supported`,
    },
    required: true,
  },
  table_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Table" }],

  del_status: {
    type: String,
    default: "Live",
  },
});

module.exports = mongoose.model("Order", orderSchema);
