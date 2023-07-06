const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ingredientSchema = Schema({
  name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "name should have more than 5 character"],
    required: [true, "please enter name"],
    trim: true,

  },
  category: {
    type: String,
    maxlength: [100, "Maximum 100 charcters are permitted"],
    minLength: [10, "category should have more than 10 character"],
    required: [true, "please enter category"],
    trim: true,
  
  },
  unit: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "unit should have more than 5 character"],
    required: [true, "please enter unit"],
    trim: true,
    default: null,
  },
  costUnit: {
    type: Number,
    required: [true, "please enter costUnit"],
    default: null,
  },

  del_status: {
    type: String,
    enum: {
      values: ["Live", "deactivate"],
      message: "Values is not matched",
    },
    default: "Live",
  },
  //   recipe: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Recipe",
  //   },
});

module.exports = mongoose.model("Ingredient", ingredientSchema);
