const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const holdsDetailsSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      food_menu_id: {
        type: Number,
        default: null
      },
      menu_name: {
        type: String,
        default: null
      },
      qty: {
        type: Number,
        default: null
      },
      menu_price_without_discount: {
        type: Number,
        required: true
      },
      menu_price_with_discount: {
        type: Number,
        required: true
      },
      menu_unit_price: {
        type: Number,
        required: true
      },
      menu_vat_percentage: {
        type: Number,
        required: true
      },
      menu_taxes: {
        type: String,
        default: null
      },
      menu_discount_value: {
        type: String,
        default: null
      },
      discount_type: {
        type: String,
        required: true
      },
      menu_note: {
        type: String,
        default: null
      },
      discount_amount: {
        type: Number,
        default: null
      },
      holds_id: {
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
      }
})

module.exports = mongoose.model("HoldsDetails", holdsDetailsSchema);