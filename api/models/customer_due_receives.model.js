const mongoose = require('mongoose');

const  customerDueReceiveSchema = new mongoose.Schema({

  id: { type: Number, required: true },
  reference_no: { type: String, default: null },
  payment_id: { type: Number, default: null },
  only_date: { type: Date, default: null },
  date: { type: Date, default: null },
  customer_id: { type: Number, default: null },
  amount: { type: Number, default: null },
  note: { type: String, default: null },
  user_id: { type: Number, default: null },
  outlet_id: { type: Number, default: null },
  company_id: { type: Number, default: null },
  del_status: { type: String, default: 'Active' }
});

const CustomerDueReceive = mongoose.model('CustomerDueReceive', customerDueReceiveSchema);

module.exports = CustomerDueReceive;