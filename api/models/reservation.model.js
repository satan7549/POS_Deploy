const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      company_id: {
        type: Number,
        default: null
      },
      outlet_id: {
        type: Number,
        default: null
      },
      name: {
        type: String,
        default: null
      },
      phone: {
        type: String,
        default: null
      },
      email: {
        type: String,
        default: null
      },
      number_of_guest: {
        type: Number,
        default: null
      },
      reservation_date: {
        type: String,
        default: null
      },
      reservation_type: {
        type: String,
        default: null
      },
      special_request: {
        type: String,
        default: null
      },
      status: {
        type: String,
        default: 'Pending'
      },
      del_status: {
        type: String,
        default: 'Live'
      }
})

module.exports = mongoose.model("Reservation", reservationSchema);