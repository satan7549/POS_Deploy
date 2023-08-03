const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ingredientSchema = Schema({
  name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [3, "name should have more than 3 character"],
    required: [true, "please enter IngredientName"],
    trim: true,
  },

  code: {
    type: Number,
    required: [true, "please enter code"],
    default: null,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "IngredientCategory",
    required: [true, "please enter IngredientCategory"],
  },

  PurchaseUnit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "IngredientUnit",
    required: [true, "please enter PurchaseUnit"],
  },

  ConsumptionUnit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "IngredientUnit",
    required: [true, "please enter ConsumptionUnit"],
  },

  ConversionRate: {
    type: Number,
    required: [true, "please enter ConversionRate"],
    default: null,
  },

  PurchaseRate: {
    type: Number,
    required: [true, "please enter PurchaseRate"],
    default: null,
  },

  costUnit: {
    type: Number,
    required: [true, "please enter costUnit"],
    default: null,
  },

  LowQty: {
    type: Number,
    required: [true, "please enter LowQty"],
    default: null,
  }, 

  del_status: {
    type: String,
    enum: {
      values: ["Live", "Deleted"],
      message: "Values is not matched",
    },
    default: "Live",
  },
  
});

module.exports = mongoose.model("Ingredient", ingredientSchema);
