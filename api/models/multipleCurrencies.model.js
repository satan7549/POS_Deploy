const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const multipleCurrenciesSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      currency: {
        type: String,
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
        default: 'Live'
      }
})

module.exports = mongoose.model("MultipleCurrencies", multipleCurrenciesSchema);