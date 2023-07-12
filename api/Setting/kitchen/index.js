const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kitchenSchema = Schema({
  kitchen_name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [3, "Kitchen name should have more than 3 character"],
    required: [true, "please enter Kitchen Name"],
    unique: true,
    trim: true,
  },

  code: {
    type: Number,
    required: [true, "please enter code"],
    default: null,
    unique: true,
  },

  kitchen_area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Areas",
    required: [true, "please enter kitchen area"],
  },

  outlet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Outlet",
    required: [true, "please enter Outlet"],
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

module.exports = mongoose.model("kitchen", kitchenSchema);
