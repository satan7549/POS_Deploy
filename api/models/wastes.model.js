const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wastesSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      reference_no: {
        type: String,
        default: null
      },
      date: {
        type: Date,
        required: true
      },
      total_loss: {
        type: Number,
        default: null
      },
      note: {
        type: String,
        default: null
      },
      employee_id: {
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
      del_status: {
        type: String,
        default: 'Active'
      },
      food_menu_id: {
        type: Number,
        default: null
      },
      food_menu_waste_qty: {
        type: Number,
        default: null
      }
})

module.exports = mongoose.model("Wastes", wastesSchema);