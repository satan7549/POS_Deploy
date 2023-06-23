const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productionSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      reference_no: {
        type: String,
        default: null
      },
      date: {
        type: String,
        required: true
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
        default: 'Live'
      },
      status: {
        type: Number,
        required: true,
        default: 0
      }
})

module.exports = mongoose.model("Production", productionSchema);