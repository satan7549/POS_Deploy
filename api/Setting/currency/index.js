const mongoose = require("mongoose");

const currencySchema = mongoose.Schema({
  currency: {
    type: String,
    maxlength: 10,
    default: null
  },
  conversion_rate: {
    type: Number,
    default: null
  },
  company_id: {
    type: Number,
    default: null
  },
  del_status: {
    type: String,
    maxlength: 10,
    default: 'Live'
  }
});

const CurrencyModel = mongoose.model("Currency", currencySchema);

module.exports = CurrencyModel;
