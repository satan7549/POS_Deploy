const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const supplierPaymentsSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      date: {
        type: Date,
        default: null
      },
      supplier_id: {
        type: Number,
        default: null
      },
      amount: {
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
      del_status: {
        type: String,
        default: 'Active'
      },
      payment_id: {
        type: Number,
        required: true,
        default: 0
      },
      added_date_time: {
        type: Date,
        required: true,
        default: Date.now
      }
})

module.exports = mongoose.model("SupplierPayments", supplierPaymentsSchema);