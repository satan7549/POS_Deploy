const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const attendanceSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      reference_no: {
        type: String,
        default: null
      },
      employee_id: {
        type: Number,
        default: null
      },
      date: {
        type: Date,
        default: null
      },
      in_time: {
        type: String,
        default: null
      },
      out_time: {
        type: String,
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
      company_id: {
        type: Number,
        default: null
      },
      del_status: {
        type: String,
        default: 'Live'
      },
      is_closed: {
        type: Number,
        required: true,
        default: 2
      }
})

module.exports = mongoose.model("Attendance", attendanceSchema);