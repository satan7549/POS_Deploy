const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const modifierIngredientSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      ingredient_id: {
        type: Number,
        default: null
      },
      consumption: {
        type: Number,
        default: null
      },
      modifier_id: {
        type: Number,
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
      cost: {
        type: Number,
        default: null
      },
      total: {
        type: Number,
        default: null
      },
      del_status: {
        type: String,
        default: 'Live'
      }
})

module.exports = mongoose.model("ModifierIngredient", modifierIngredientSchema);