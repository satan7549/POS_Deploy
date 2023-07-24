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
    default: null,
    trim: true,
    maxlength: [500, "Food category description can't exceed 500 characters."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  kitchen:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Kitchen",
  }],
  del_status: {
    type: String,
    enum: {
      values: ["Live", "Deleted"],
      message: "Value is not matched",
    },
    default: "Live",
  },
});

module.exports = mongoose.model("FoodCategory", foodCategorySchema);
