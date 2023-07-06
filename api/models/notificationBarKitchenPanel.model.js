const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notificationBarKitchenPanelSchema = Schema({
  id: {
    type: Number,
    required: true,
  },
  notification: {
    type: String,
    required: true,
  },
  sale_id: {
    type: Number,
    required: true,
  },
  kitchen_id: {
    type: Number,
    default: null,
  },
  outlet_id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(
  "NotificationBarKitchenPanel",
  notificationBarKitchenPanelSchema
);
