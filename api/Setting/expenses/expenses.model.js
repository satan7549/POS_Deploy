const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expensesSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      date: {
        type: Date,
        default: null
      },
      amount: {
        type: Number,
        default: null
      },
      category_id: {
        type: Number,
        default: null
      },
      employee_id: {
        type: Number,
        default: null
      },
      note: {
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
      payment_id: {
        type: Number,
        default: 0
      },
      added_date_time: {
        type: Date,
        required: true,
        default: Date.now()
      },
      del_status: {
        type: String,
        default: 'Live'
      }
})

module.exports = mongoose.model("Expenses", expensesSchema);