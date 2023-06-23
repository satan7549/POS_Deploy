const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notificationsSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      notification: {
        type: String,
        required: true
      },
      sale_id: {
        type: Number,
        required: true
      },
      waiter_id: {
        type: Number,
        default: null
      },
      push_status: {
        type: Number,
        default: 1
      },
      outlet_id: {
        type: Number,
        required: true
      }
})

module.exports = mongoose.model("Notifications", notificationsSchema);