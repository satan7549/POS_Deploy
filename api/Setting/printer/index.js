const mongoose = require('mongoose');

const printerSchema = new mongoose.Schema({


  path: { 
    type: String,
     default: null
     },
  title: { 
    type: String,
     default: null
     },
  type: { 
    type: String,
     default: null 
    },
  profile_: { 
    type: String,
     default: null
     },
  characters_per_line: {
     type: Number, 
     default: null
     },
  printer_ip_address: { 
    type: String,
     default: null
     },
  printer_port: {
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
     }
});

const Printer = mongoose.model('Printer', printerSchema);

module.exports = Printer;