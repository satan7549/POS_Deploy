const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodMenuSchema = Schema({
  name: {
    type: String,
    default: null,
    maxlength: 50,
    required: true,
  },
  description: {
    type: String,
    default: null,
    maxlength: 200,
  },
  recipe: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Recipe", required: true },
  ],
  outlet: {
    type: Map,
    of: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Outlet",
    },
    //required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    require: true,
  },
});

module.exports = mongoose.model("FoodMenu", foodMenuSchema);
