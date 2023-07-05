const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodCategorySchema = Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please enter the food category name."],
    maxlength: [100, "Food category name can't exceed 100 characters."],
    minlength: [3, "Food category name should have at least 3 characters."],
  },
  description: {
    type: String,
    required: [true, "Please enter the description."],
    trim: true,
    maxlength: [500, "Food category description can't exceed 500 characters."],
    minlength: [10,"Food category description should have at least 10 characters.",
    ],
  },
  del_status: {
    type: String,
    enum: {
      values: ["Live", "deactivate"],
      message: "Value is not matched",
    },
    default: "Live",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FoodCategory", foodCategorySchema);
