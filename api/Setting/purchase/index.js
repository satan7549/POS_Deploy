const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  reference_no: {
    type: String,
    default: null,
  },
  supplier_id: {
    type: Number,
    default: null,
  },
  date: {
    type: String,
    required: true,
  },
  subtotal: {
    type: Number,
    default: null,
  },
  other: {
    type: Number,
    default: null,
  },
  grand_total: {
    type: Number,
    default: null,
  },
  paid: {
    type: Number,
    default: null,
  },
  due: {
    type: Number,
    default: null,
  },
  note: {
    type: String,
    default: null,
  },
  user_id: {
    type: Number,
    default: null,
  },
  outlet_id: {
    type: Number,
    default: null,
  },
  added_date_time: {
    type: Date,
    required: true,
    default: Date.now,
  },
  payment_id: {
    type: Number,
    required: true,
    default: 0,
  },
  del_status: {
    type: String,
    default: "Active",
  },
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;
