const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: [30, "Maximum 30 charcters are permitted"],
    minLength: [3, "Company name should have more than 3 character"],
    required: [true, "please enter name"],
    unique: true,
    trim: true,
  },

  // cuisine: {
  //   type: String,
  //   maxlength: [50, "Maximum 50 charcters are permitted"],
  //   minLength: [5, "cusine should have more than 5 character"],
  //   trim: true,
  // },

  // Array of outlet references
  outlets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Outlet",
    },
  ],

  del_status: {
    type: String,
    enum: {
      values: ["Live", "Deactivate"],
      message: "Values is not matched",
    },
    default: "Live",
  },
});

module.exports = mongoose.model("Company", CompanySchema);
