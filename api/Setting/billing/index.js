const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const billingSchema = Schema({
  billing_name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "billing_name should have more than 5 character"],
    required: [true, "please enter billing_name"],
    trim: true,
    default: null,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "please enter userID"],
  },
  billingDate: {
    type: Date,
    default: Date.now,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [3, "paymentMethod name should have more than 3 character"],
    required: [true, "please enter paymentMethod"],
    trim: true,
  },
  transactionStatus: {
    type: String,
    enum: {
      values: ["Pending", "Done", "Failed"],
      message: "Values is not matched",
    },
    default: "Done",
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

module.exports = mongoose.model("Billing", billingSchema);
