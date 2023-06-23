const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deliveryPartnersSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      name: {
        type: String,
        default: null
      },
      aggregator_tran_code: {
        type: String,
        default: null
      },
      description: {
        type: String,
        default: null
      },
      user_id: {
        type: Number,
        default: null
      },
      company_id: {
        type: Number,
        default: null,
        unsigned: true
      },
      logo: {
        type: String,
        default: null
      },
      del_status: {
        type: String,
        default: 'Live'
      }
})

module.exports = mongoose.model("DeliveryPartners", deliveryPartnersSchema);