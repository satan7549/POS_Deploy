const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const areasSchema = Schema({
  outlet_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Outlet",
    required: true,
  },
  // company_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Company",
  //   required: true,
  // },
  area_name: {
    type: String,
    maxlength: 250,
    default: null,
  },
  description: {
    type: String,
    maxlength: 100,
    default: null,
  },
});

module.exports = mongoose.model("Areas", areasSchema);
