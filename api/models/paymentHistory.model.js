const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentHistorySchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      payment_type: {
        type: String,
        default: null
      },
      company_id: {
        type: Number,
        default: null
      },
      payment_date: {
        type: String,
        default: null
      },
      amount: {
        type: Number,
        default: null
      },
      trans_id: {
        type: String,
        default: null
      },
      json_details: {
        type: String,
        default: null
      },
      del_status: {
        type: String,
        default: 'Active'
      }
})

module.exports = mongoose.model("PaymentHistory", paymentHistorySchema);