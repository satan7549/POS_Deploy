const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const holdsDetailsModifiersSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      modifier_id: {
        type: Number,
        required: true
      },
      modifier_price: {
        type: Number,
        required: true
      },
      food_menu_id: {
        type: Number,
        required: true
      },
      holds_id: {
        type: Number,
        required: true
      },
      holds_details_id: {
        type: Number,
        required: true
      },
      menu_vat_percentage: {
        type: Number,
        default: null
      },
      menu_taxes: {
        type: String,
        default: null
      },
      user_id: {
        type: Number,
        required: true
      },
      outlet_id: {
        type: Number,
        required: true
      },
      customer_id: {
        type: Number,
        required: true
      }
})

module.exports = mongoose.model("HoldsDetailsModifiers", holdsDetailsModifiersSchema);