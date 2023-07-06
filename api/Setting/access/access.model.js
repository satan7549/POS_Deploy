const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accessSchema = Schema({
  module_name: {
    type: String,
    default: null,
  },
  function_name: {
    type: String,
    default: null,
  },
  label_name: {
    type: String,
    default: null,
  },
  parent_id: {
    type: Number,
    default: 0,
  },
  main_module_id: {
    type: Number,
    default: null,
  },
  del_status: {
    type: String,
    default: "Active",
  },
});

module.exports = mongoose.model("Access", accessSchema);
