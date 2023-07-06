const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const settingsSchema = Schema({
    id: {
        type: Number,
        required: true
      },
      site_name: {
        type: String,
        default: null
      },
      footer: {
        type: String,
        default: null
      },
      system_logo: {
        type: String,
        default: null
      },
      company_id: {
        type: Number,
        default: null
      },
      del_status: {
        type: String,
        required: true,
        default: 'Active'
      }
})

module.exports = mongoose.model("Settings", settingsSchema);