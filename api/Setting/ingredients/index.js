const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ingredientSchema = Schema({
  name: {
    type: String,
    required: true,
    default: null,
  },
  category: {
    type: String,
    default: null,
  },
  unit: {
    type: String,
    required: true,
    default: null,
  },
  costUnit: {
    type: Number,
    required: true,
    default: null,
  },
  //   recipe: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Recipe",
  //   },
});

module.exports = mongoose.model("Ingredient", ingredientSchema);
