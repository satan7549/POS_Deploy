const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roleAccessSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      role_id: {
        type: Number,
        default: null
      },
      access_parent_id: {
        type: Number,
        default: null
      },
      access_child_id: {
        type: Number,
        default: null
      },
      del_status: {
        type: String,
        default: 'Live'
      }
})

module.exports = mongoose.model("RoleAccess", roleAccessSchema);