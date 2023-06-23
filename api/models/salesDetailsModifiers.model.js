const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const salesDetailsModifiersSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      modifier_id: {
        type: Number,
        required: true
      },
      modifier_price: {
        type: Number,
        required: true
      },
      food_menu_id: {
        type: Number,
        required: true
      },
      sales_id: {
        type: Number,
        required: true
      },
      order_status: {
        type: Number,
        required: true,
        enum: [1, 2, 3],
        comment: '1=new order,2=invoiced order,3=closed order'
      },
      sales_details_id: {
        type: Number,
        required: true
      },
      menu_vat_percentage: {
        type: Number,
        default: null
      },
      menu_taxes: {
        type: String,
        default: null
      },
      user_id: {
        type: Number,
        required: true
      },
      outlet_id: {
        type: Number,
        required: true
      },
      customer_id: {
        type: Number,
        required: true
      }
})

module.exports = mongoose.model("SalesDetailsModifiers", salesDetailsModifiersSchema);