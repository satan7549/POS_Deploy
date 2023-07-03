const mongoose = require("mongoose");

const kitchenSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
  },
  printer_id: {
    type: Number,
    default: null,
  },
  print_server_url: {
    type: String,
    default: null,
  },
  del_status: {
    type: String,
    required: true,
    default: "Live",
  },
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  outlet_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Outlet",
    required: true,
  },
});

const Kitchen = mongoose.model("Kitchen", kitchenSchema);

module.exports = Kitchen;
