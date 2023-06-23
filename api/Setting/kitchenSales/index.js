const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kitchenSalesSchema = Schema({
    delivery_partner_id: {
        type: Number,
        default: null,
      },
      status: {
        type: String,
        required: true,
        default: 'Pending',
      },
      split_sale_id: {
        type: Number,
        default: null,
      },
      order_receiving_id: {
        type: Number,
        required: true,
        default: 0,
      }
})

module.exports = mongoose.model("KitchenSales", kitchenSalesSchema);