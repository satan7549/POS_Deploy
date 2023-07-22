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
    minlength: [3, "Code should have at least 3 characters"],
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
  Dine_price: {
    type: Number,
    required: [true, "Please enter a Dine_price"],
  },

  Takeaway_price: {
    type: Number,
    required: [true, "Please enter a Takeaway_price"],
  },
  Delivery_price: [
    {
      deliveryPartnerName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DeliveryPartner",
        default: null,
      },

      price: {
        type: Number,
        min: 0,
        default: 0,
      },
    },
  ],
  description: {
    type: String,
    maxlength: [200, "Maximum 200 characters are permitted"],
    default: null,
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
    enum: ["Live", "Deleted"],
    default: "Live",
  },
});

const FoodCombo = mongoose.model("FoodCombo", foodComboSchema);

module.exports = FoodCombo;
