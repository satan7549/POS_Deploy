const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registerSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      opening_balance: {
        type: Number,
        default: null
      },
      opening_details: {
        type: String,
        default: null
      },
      closing_balance: {
        type: Number,
        default: null
      },
      opening_balance_date_time: {
        type: Date,
        default: null
      },
      closing_balance_date_time: {
        type: Date,
        default: null
      },
      sale_paid_amount: {
        type: Number,
        default: null
      },
      refund_amount: {
        type: Number,
        default: null
      },
      customer_due_receive: {
        type: Number,
        default: null
      },
      payment_methods_sale: {
        type: String,
        default: null
      },
      register_status: {
        type: Number,
        default: 1,
        required: true
      },
      others_currency: {
        type: String,
        default: null
      },
      total_purchase: {
        type: Number,
        default: null
      },
      total_due_payment: {
        type: Number,
        default: null
      },
      total_expense: {
        type: Number,
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
      company_id: {
        type: Number,
        default: null
      }
})

module.exports = mongoose.model("Register", registerSchema);