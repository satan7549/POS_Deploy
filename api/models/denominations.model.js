const mongoose = require('mongoose');

const   denominationSchema = new mongoose.Schema({

  id: { type: Number, required: true },
  amount: { type: Number, default: null },
  description: { type: String, default: null },
  company_id: { type: Number, default: null },
  del_status: { type: String, default: 'Live' }
});

const Denomination = mongoose.model('Denomination', denominationSchema);

module.exports = Denomination;