const mongoose = require('mongoose');

const  customerSchema = new mongoose.Schema({

  id: { type: Number, required: true },
  name: { type: String, default: null },
  phone: { type: String, default: null },
  email: { type: String, default: null },
  address: { type: String, default: null },
  password: { type: String, default: null },
  gst_number: { type: String, default: null },
  pre_or_post_payment: { type: String, default: 'Post Payment' },
  area_id: { type: Number, default: null },
  user_id: { type: Number, default: null },
  company_id: { type: Number, default: null },
  del_status: { type: String, default: 'Active' },
  date_of_birth: { type: Date, default: null },
  date_of_anniversary: { type: Date, default: null },
  default_discount: { type: String, required: true, default: '0' },
  added_date: { type: Date, default: Date.now },
  password_online_user: { type: String, default: null },
  same_or_diff_state: { type: Number, required: true, default: 0 }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;