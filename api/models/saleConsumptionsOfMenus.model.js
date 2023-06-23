const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const saleConsumptionsOfModifiersOfMenusSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      ingredient_id: {
        type: Number,
        default: null
      },
      consumption: {
        type: Number,
        default: null
      },
      sale_consumption_id: {
        type: Number,
        default: null
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
      food_menu_id: {
        type: Number,
        required: true
      },
      user_id: {
        type: Number,
        default: null
      },
      outlet_id: {
        type: Number,
        default: null
      },
      del_status: {
        type: String,
        default: 'Live'
      },
      cost: {
        type: Number,
        default: null
      }
})

module.exports = mongoose.model("SaleConsumptionsOfModifiersOfMenus", saleConsumptionsOfModifiersOfMenusSchema);