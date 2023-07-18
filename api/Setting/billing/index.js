const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const billingSchema = Schema({
  billing_name: { type: String, required: true, },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
  email_address: { type: String, required: true },
  billingDate: { type: Date, required: true, },
  totalAmount: { type: Number, required: true,  },
  paymentMethod: { type: String, required: true, },
  transactionStatus: { type: String, required: true, },
  del_status: { type: String, enum: { values: ["Live", "Deleted"], message: "Values is not matched", }, default: "Live", },
});

module.exports = mongoose.model("Billing", billingSchema);
