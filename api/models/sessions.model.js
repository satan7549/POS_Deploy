const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sessionsSchema = Schema({
    id: {
        type: Number,
        required: true
      },
      country_code: {
        type: String,
        default: null
      },
      zone_name: {
        type: String,
        default: null
      },
      del_status: {
        type: String,
        default: 'Live'
      }
})

module.exports = mongoose.model("Sessions", sessionsSchema);