let mongoose = require("mongoose");

let Schema = mongoose.Schema;

const tableSchema = Schema({
  area_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Areas",
    required: true,
  },
  name: {
    type: String,
    maxlength: 50,
    default: null,
  },
  sit_capacity: {
    type: String,
    maxlength: 50,
    default: null,
  },
  position: {
    type: String,
    maxlength: 50,
    default: null,
  },
  description: {
    type: String,
    maxlength: 100,
    default: null,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  outlet_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Outlet",
    required: true,
  },
  // company_id: {
  //     type: Number,
  //     default: null
  // },
  del_status: {
    type: String,
    maxlength: 50,
    default: "Live",
  },
});

module.exports = mongoose.model("Table", tableSchema);
