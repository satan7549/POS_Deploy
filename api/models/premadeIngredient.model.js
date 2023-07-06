const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const premadeIngredientSchema = Schema({
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
      pre_made_id: {
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
      del_status: {
        type: String,
        default: 'Active'
      },
      cost: {
        type: Number,
        default: null
      },
      total: {
        type: Number,
        default: null
      }
})

module.exports = mongoose.model("PremadeIngredient", premadeIngredientSchema);