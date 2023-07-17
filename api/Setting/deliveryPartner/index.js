const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deliveryPartnerSchema = Schema({
  DeliveryPartner_name: { type: String, required: true, },
  email: { type: String, required: true, },
  phone: { type: String,  required: true, },
  address: { type: String, required: true, },
  postal_code: { type: String, required: true, },
  created_at: {  type: Date, required: true, },
  updated_at: { type: Date, required: true, },
  del_status: { type: String, enum: { values: ["Live", "Deleted"], message: "Values is not matched", }, default: "Live", },
});

module.exports = mongoose.model("DeliveryPartner", deliveryPartnerSchema);
