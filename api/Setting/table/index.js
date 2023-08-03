let mongoose = require("mongoose");

let Schema = mongoose.Schema;

const tableSchema = Schema({
  area_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Areas",
    required: [true, "please enter area_id"],
  },
  name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [3, "name should have more than 3 character"],
    required: [true, "please enter name"],
    trim: true,
    default: null,
  },
  sit_capacity: {
    type: Number,
    maxlength: [10, "Maximum 10 charcters are permitted"],
    minLength: [1, "sit_capacity should have more than 1 character"],
    required: [true, "please enter sit_capacity"],
    trim: true,
    default: null,
  },
  position: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [3, "position should have more than 3 character"],
    required: [true, "please enter position"],
    trim: true,
    default: null,
  },
  description: {
    type: String,
    maxlength: [100, "Maximum 100 charcters are permitted"],
    trim: true,
    default: null,
  },
  outlet_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Outlet",
    required: [true, "please enter outlet_id"],
  },

  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", default: null },

  del_status: {
    type: String,
    enum: {
      values: ["Live", "Deleted"],
      message: "Values is not matched",
    },
    default: "Live",
  },
});

module.exports = mongoose.model("Table", tableSchema);
