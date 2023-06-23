const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userMenuAccessSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      menu_id: {
        type: Number,
        default: 0
      },
      user_id: {
        type: Number,
        default: 0
      }
})

module.exports = mongoose.model("UserMenuAccess", userMenuAccessSchema);