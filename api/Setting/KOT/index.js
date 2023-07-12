const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kotSchema = Schema({
  //   name: {
  //     type: String,
  //     maxlength: [50, "Maximum 50 charcters are permitted"],
  //     minLength: [5, "name should have more than 5 character"],
  //     required: [true, "please enter name"],
  //     trim: true,
  //   },

  kot_number: {
    type: Number,
    required: true,
    unique: true,
  },

  waiter_name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [3, "name should have more than 3 character"],
    required: [true, "please enter waiter name"],
    trim: true,
    default: null,
  },

  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Table",
    required: [true, "please enter table"],
  },

  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },

  cooking_status: {
    type: String,
    enum: {
      values: ["requested", "cooking", "done"],
      message: "Value is not matched",
    },
    required: [true, "please enter status"],
    default: "requested",
    trim: true,
  },

  items: [
    {
      food_item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodMenu",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      customer_comment: {
        type: String,
        default: null,
      },
    },
  ],

  customer_comment_for_all_food: {
    type: String,
    default: null,
  },

  createdAt: {
    type: Date,
    default: Date.now,
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

const Kot = mongoose.model("Kot", kotSchema);

module.exports = Kot;
