const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = Schema({
  name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "name should have more than 5 character"],
    required: [true, "please enter name"],
    trim: true,
    default: null,
  },
  description: {
    type: String,
    maxlength: [100, "Maximum 100 charcters are permitted"],
    trim: true,
    default: null,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please enter user_id"],
  },
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: [true, "Please enter company_id"],
  },
  order_by: {
    type: Number,
    default: null,
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    trim: true,
    default: null,
    unique: true,
  },
  del_status: {
    type: String,
    required: true,
    default: "Active",
  },
});

module.exports = mongoose.model("Payment", paymentSchema);
