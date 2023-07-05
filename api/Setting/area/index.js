const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const areasSchema = Schema({
  outlet_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Outlet",
    required: [true, "please enter outlet_id"],
  },
  area_name: {
    type: String,
    maxlength: [100, "Maximum 100 charcters are permitted"],
    minLength: [3, "area_name should have more than 3 character"],
    required: [true, "please enter area_name"],
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    maxlength: [100, "Maximum 100 charcters are permitted"],
    minLength: [5, "description should have more than 5 character"],
    default: null,
    trim: true,
  },
  del_status: {
    type: String,
    enum: {
      values: ["Live", "deactivate"],
      message: "Value is not matched",
    },
    default: "Live",
  },
});

module.exports = mongoose.model("Areas", areasSchema);
