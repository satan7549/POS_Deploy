const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deliveryPartnerSchema = Schema({
  
  DeliveryPartner_name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "DeliveryPartner_name should have more than 5 character"],
    required: [true, "please enter DeliveryPartner_name"],
    trim: true,
    default: null,
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    trim: true,
    default: null,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    maxlength: [100, "Maximum 100 charcters are permitted"],
    minLength: [5, "address should have more than 5 character"],
    required: [true, "please enter address"],
    trim: true,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
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

module.exports = mongoose.model("DeliveryPartner", deliveryPartnerSchema);
