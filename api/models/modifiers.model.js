const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const modifiersSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      name: {
        type: String,
        default: null
      },
      price: {
        type: Number,
        default: null
      },
      description: {
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
      tax_information: {
        type: String,
        default: null
      },
      tax_string: {
        type: String,
        default: null
      },
      total_cost: {
        type: Number,
        default: null
      },
      del_status: {
        type: String,
        required: true,
        default: 'Active'
      }
})

module.exports = mongoose.model("Modifiers", modifiersSchema);