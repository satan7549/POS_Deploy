const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taxSchema = Schema({
  tax_name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [3, "tax_name should have more than 3 character"],
    required: [true, "please enter tax_name"],
    trim: true,
    default: null,
  },
  description: {
    type: String,
    maxlength: [100, "Maximum 100 charcters are permitted"],
    trim: true,
    default: null,
  },
  percentage: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  del_status: {
    type: String,
    enum: ["Live", "Deleted"],
    default: "Live",
  },
});

module.exports = mongoose.model("Tax", taxSchema);
