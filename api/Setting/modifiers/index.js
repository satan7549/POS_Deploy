const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const modifierSchema = Schema({
  name: {
    type: String,
    maxlength: 50
  },
  price: {
    type: Number
  },
  description: {
    type: String,
    maxlength: 300
  },
  user_id: {
    type: Number
  },
  company_id: {
    type: Number
  },
  tax_information: {
    type: String
  },
  tax_string: {
    type: String,
    maxlength: 250
  },
  total_cost: {
    type: Number
  },
  del_status: {
    type: String,
    enum: ['Live', 'Deleted'],
    default: 'Live'
  }
});

module.exports = mongoose.model("Modifier", modifierSchema);
