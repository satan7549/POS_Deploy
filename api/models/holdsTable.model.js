const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const holdsTableSchema = Schema({
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
      hold_id: {
        type: Number,
        required: true
      },
      hold_no: {
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
        default: 'Active'
      }
})

module.exports = mongoose.model("HoldsTable", holdsTableSchema);