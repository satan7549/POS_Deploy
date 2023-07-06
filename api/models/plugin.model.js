const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pluginSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      name: {
        type: String,
        required: true
      },
      product_id: {
        type: Number,
        required: true
      },
      details: {
        type: String,
        required: true
      },
      bestoro: {
        type: String,
        required: true
      },
      active_status: {
        type: String,
        default: 'Active'
      },
      installation_date: {
        type: String,
        default: null
      },
      version: {
        type: String,
        required: true
      },
      company_id: {
        type: Number,
        default: null
      },
      del_status: {
        type: String,
        default: 'Active'
      }
})

module.exports = mongoose.model("Plugin", pluginSchema);