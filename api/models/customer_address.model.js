const mongoose = require('mongoose');

const customerAddressSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  customer_id: { type: Number, default: null },
  address: { type: String, default: null },
  is_active: { type: Number, default: 0 },
  del_status: { type: String, required: true, default: 'Live' }
});

const CustomerAddress = mongoose.model('CustomerAddress', customerAddressSchema);

module.exports = CustomerAddress;