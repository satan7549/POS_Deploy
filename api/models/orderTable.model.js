const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderTableSchema = Schema({
    // id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true
    //   },
      persons: {
        type: Number,
        required: true
      },
      booking_time: {
        type: Date,
        required: true
      },
      sale_id: {
        type: Number,
        required: true
      },
      sale_no: {
        type: String,
        required: true
      },
      outlet_id: {
        type: Number,
        required: true
      },
      table_id: {
        type: Number,
        required: true
      },
      del_status: {
        type: String,
        default: 'Live',
        required: true
      }
})

module.exports = mongoose.model("OrderTable", orderTableSchema);