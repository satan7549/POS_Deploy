const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodMenuSchema = Schema({
  name: {
    type: String,
    default: null,
    maxlength: 50,
    required: true,
  },
  code: {
    type: String,
    default: null,
    maxlength: 50,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    enum: ["chinese", "mexicon", "indian"],
    required: true,
  },
  ingredients: [
    {
      ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  price: {
    type: Number,
    required: true,
    default: null,
  },
  description: {
    type: String,
    default: null,
    maxlength: 200,
  },
  isVeg: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  isBeverage: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  outlet: {
    type: Map,
    of: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Outlet",
    },
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
});

module.exports = mongoose.model("FoodMenu", foodMenuSchema);
