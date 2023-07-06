const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodMenuSchema = Schema({
  name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "name should have more than 5 character"],
    required: [true, "please enter name"],
    trim: true,
    default: null,
  },
  code: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "code should have more than 5 character"],
    required: [true, "please enter code"],
    trim: true,
    default: null,
    unique: true,
  },

  food_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FoodCategory",
    required: [true, "please enter food_category"],
  },

  ingredients: [
    {
      ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
        required: [true, "please enter ingredient"],
      },

      quantity: {
        type: Number,
        maxlength: [10, "Maximum 10 charcters are permitted"],
        minLength: [1, "quantity should have more than 1 character"],
        required: [true, "please enter quantity"],
      },
    },
  ],

  price: {
    type: Number,
    required: [true, "Please enter price"],
    default: null,
  },

  description: {
    type: String,
    maxlength: [200, "Maximum 200 charcters are permitted"],
    minLength: [10, "description should have more than 10 character"],
    required: [true, "please enter description"],
    trim: true,
    default: null,
  },

  isVeg: {
    type: String,
    enum: {
      values: ["yes", "no"],
      message: "Value is not matched",
    },
    required: [true, "please enter isVeg"],
    default: "no",
    trim: true,
  },

  isBeverage: {
    type: String,
    enum: {
      values: ["yes", "no"], // Use "values" instead of "value"
      message: "Value is not matched",
    },
    required: [true, "please enter isBeverage"],
    default: "no",
    trim: true,
  },

  outlet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Outlet",
    required: [true, "please enter outlet"],
    trim: true,
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

module.exports = mongoose.model("FoodMenu", foodMenuSchema);
