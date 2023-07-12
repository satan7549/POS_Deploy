const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taxSchema = Schema({
  tax_name: { type: String, required: true },
  description: { type: String, required: true },
  percentage: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  del_status: { type: String,  enum: ['Live', 'Deleted'], default: 'Live' }
});

module.exports = mongoose.model("Tax", taxSchema);
