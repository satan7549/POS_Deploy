const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// id, name, ingredient_id, price

const recipeSchema = Schema({
  name: {
    type: String,
    unique: true,
    default: null,
  },
  price: {
    type: Number,
    required: true,
    default: null,
  },
  ingredients: [
    {
      ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],
  //   foodMenu: {
  //     type: Map,
  //     of: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "FoodMenu",
  //     },
  //     required: true,
  //   },
});

module.exports = mongoose.model("Recipe", recipeSchema);
