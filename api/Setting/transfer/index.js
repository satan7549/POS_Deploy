const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
  
  transfer_type: {
    type: Number,
    required: true,
    default: 1
  },
  reference_no: {
    type: String,
    default: null
  },
  date: {
    type: String,
    required: true
  },
  received_date: {
    type: Date,
    default: null
  },
  note_for_sender: {
    type: String,
    default: null
  },
  note_for_receiver: {
    type: String,
    default: null
  },
  user_id: {
    type: Number,
    default: null
  },
  outlet_id: {
    type: Number,
    default: null
  },
  from_outlet_id: {
    type: Number,
    default: null
  },
  to_outlet_id: {
    type: Number,
    default: null
  },
  status: {
    type: Number,
    default: null
  },
  del_status: {
    type: String,
    default: 'Live'
  }
});

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;