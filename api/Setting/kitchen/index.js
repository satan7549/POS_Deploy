
const mongoose = require('mongoose');

const kitchenSchema = new mongoose.Schema({
  
  name: {
    type: String,
    default: null
  },
  printer_id: {
    type: Number,
    default: null
  },
  print_server_url: {
    type: String,
    default: null
  },
  company_id: {
    type: Number,
    default: null
  },
  del_status: {
    type: String,
    required: true,
    default: 'Live'
  },
  outlet_id: {
    type: Number,
    default: 0
  }
});

const Kitchen = mongoose.model('Kitchen', kitchenSchema);

module.exports = Kitchen;