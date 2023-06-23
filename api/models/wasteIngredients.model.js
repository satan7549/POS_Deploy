const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wasteIngredientsSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      ingredient_id: {
        type: Number,
        default: null
      },
      waste_amount: {
        type: Number,
        default: null
      },
      last_purchase_price: {
        type: Number,
        default: null
      },
      loss_amount: {
        type: Number,
        default: null
      },
      waste_id: {
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
      }
})

module.exports = mongoose.model("WasteIngredients", wasteIngredientsSchema);