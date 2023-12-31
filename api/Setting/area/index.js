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
    maxlength: [200, "Maximum 200 charcters are permitted"],
    default: null,
    trim: true,
  },
  tables:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
    }],
  del_status: {
    type: String,
    enum: {
      values: ["Live", "Deleted"],
      message: "Values is not matched",
    },
    default: "Live",
  },
});

module.exports = mongoose.model("Areas", areasSchema);
