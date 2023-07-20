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

  Dine_price: {
    type: Number,
  },

  Takeaway_price: {
    type: Number,
  },
  Delivery_price: [
    {
      deliveryPartnerName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DeliveryPartner",
        required: [true, "please enter DeliveryPartner"],
      },

      price: {
        type: Number,
        minLength: [1, "price should have more than 1 character"],
        required: [true, "please enter price"],
      },
    },
  ],

  description: {
    type: String,
    maxlength: [200, "Maximum 200 charcters are permitted"],
    trim: true,
    default: null,
  },

  isVeg: {
    type: Boolean,
    required: [true, "Please specify if the combo is vegetarian"],
    default: false,
  },

  isBeverage: {
    type: Boolean,
    required: [true, "Please specify if the combo is vegetarian"],
    default: false,
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
