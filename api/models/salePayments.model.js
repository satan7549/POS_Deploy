const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const salePaymentsSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      payment_id: {
        type: Number,
        default: null
      },
      currency_type: {
        type: Number,
        default: null
      },
      loyalty_rate: {
        type: Number,
        default: null
      },
      multi_currency: {
        type: String,
        default: null
      },
      multi_currency_rate: {
        type: Number,
        default: null
      },
      amount: {
        type: Number,
        default: null
      },
      usage_point: {
        type: Number,
        default: null
      },
      sale_id: {
        type: Number,
        default: null
      },
      date_time: {
        type: Date,
        default: null
      },
      del_status: {
        type: String,
        default: 'Active'
      },
      user_id: {
        type: Number,
        default: null
      },
      outlet_id: {
        type: Number,
        default: null
      },
      payment_name: {
        type: String,
        default: null
      }
})

module.exports = mongoose.model("SalePayments", salePaymentsSchema);