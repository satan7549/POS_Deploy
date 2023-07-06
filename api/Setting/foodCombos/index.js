const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodComboSchema = new Schema({
  name: {
    type: String,
    maxlength: [50, "Maximum 50 characters are permitted"],
    minlength: [5, "Name should have at least 5 characters"],
    required: [true, "Please enter a name"],
    trim: true,
    unique: true,
  },
  code: {
    type: String,
    maxlength: [50, "Maximum 50 characters are permitted"],
    minlength: [5, "Code should have at least 5 characters"],
    required: [true, "Please enter a code"],
    trim: true,
    unique: true,
  },
  food_category: {
    type: Schema.Types.ObjectId,
    ref: "FoodCategory",
    required: [true, "Please enter a food category"],
  },
  food_menu: [
    {
      food_item: {
        type: Schema.Types.ObjectId,
        ref: "FoodMenu",
        required: [true, "Please enter a food menu item"],
      },
      quantity: {
        type: Number,
        min: [1, "Quantity should be at least 1"],
        max: [10, "Maximum quantity is 10"],
        required: [true, "Please enter a quantity"],
      },
    },
  ],
  price: {
    type: Number,
    required: [true, "Please enter a price"],
  },
  description: {
    type: String,
    maxlength: [200, "Maximum 200 characters are permitted"],
    minlength: [10, "Description should have at least 10 characters"],
    required: [true, "Please enter a description"],
    trim: true,
  },
  isVeg: {
    type: Boolean,
    required: [true, "Please specify if the combo is vegetarian"],
    default: false,
  },
  isBeverage: {
    type: Boolean,
    required: [true, "Please specify if the combo is a beverage"],
    default: false,
  },
  outlet: {
    type: Schema.Types.ObjectId,
    ref: "Outlet",
    required: [true, "Please enter an outlet"],
  },
  del_status: {
    type: String,
    enum: ["Live", "Deactivate"],
    default: "Live",
  },
});

const FoodCombo = mongoose.model("FoodCombo", foodComboSchema);

module.exports = FoodCombo;
