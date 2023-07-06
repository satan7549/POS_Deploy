const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transferReceivedIngredientsSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      transfer_type: {
        type: Number,
        required: true,
        default: 1
      },
      status: {
        type: Number,
        default: null
      },
      ingredient_id: {
        type: Number,
        default: null
      },
      quantity_amount: {
        type: Number,
        default: null
      },
      unit_price: {
        type: Number,
        default: null
      },
      transfer_id: {
        type: Number,
        default: null
      },
      from_outlet_id: {
        type: Number,
        default: null
      },
      to_outlet_id: {
        type: Number,
        default: null
      },
      total_cost: {
        type: Number,
        default: null
      },
      single_cost_total: {
        type: Number,
        default: null
      },
      single_total_tax: {
        type: Number,
        default: null
      },
      single_total_sale_amount: {
        type: Number,
        default: null
      },
      total_tax: {
        type: Number,
        default: null
      },
      total_sale_amount: {
        type: Number,
        default: null
      },
      del_status: {
        type: String,
        default: 'Active'
      }
})

module.exports = mongoose.model("TransferReceivedIngredients", transferReceivedIngredientsSchema);