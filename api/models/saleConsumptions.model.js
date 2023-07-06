const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const saleConsumptionsSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      sale_id: {
        type: Number,
        default: null
      },
      order_status: {
        type: Number,
        required: true,
        enum: [1, 2, 3],
        comment: '1=new order,2=invoiced order,3=closed order'
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
        default: 'Active'
      }
})

module.exports = mongoose.model("SaleConsumptions", saleConsumptionsSchema);