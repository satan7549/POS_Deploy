const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema({
  full_name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email_address: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    default: null
  },
  will_login: {
    type: String,
    default: 'No'
  },
  role: {
    type: String,
    default: null
  },
  outlet_id: {
    type: Number,
    default: null
  },
  outlets: {
    type: String,
    default: null
  },
  kitchens: {
    type: String,
    default: null
  },
  company_id: {
    type: Number,
    default: null
  },
  account_creation_date: {
    type: String,
    default: null
  },
  language: {
    type: String,
    default: 'english'
  },
  last_login: {
    type: String,
    default: null
  },
  created_id: {
    type: Number,
    default: null
  },
  active_status: {
    type: String,
    default: 'Active'
  },
  del_status: {
    type: String,
    default: 'Live'
  },
  question: {
    type: String,
    default: null
  },
  answer: {
    type: String,
    default: null
  },
  login_pin: {
    type: String,
    default: null
  },
  order_receiving_id: {
    type: Number,
    default: 0
  },
  role_id: {
    type: Number,
    default: null
  }
})

module.exports = mongoose.model("User", userSchema);
