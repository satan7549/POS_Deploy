const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = Schema(
  {
    payment_name: { type: String, required: [true, "Please enter the payment method name"], unique: true },
    payment_method: { type: String, enum: { values: ["Credit-Card", "Debit-Card", "Cash"], message: "Value is not matched" } },
    other_method: { type: String, enum: { values: ["Other", "UPI"], message: "Value is not matched" } },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: [true, "Please enter company_id"] },
    del_status: { type: String, required: true, default: 'Active' }
  }
);

module.exports = mongoose.model('Payment', paymentSchema);
