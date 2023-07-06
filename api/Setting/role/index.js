const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roleSchema = Schema({
    role_name: {
        type: String,
        default: null
      },
      del_status: {
        type: String,
        required: true,
        default: 'Active'
      },
      company_id: {
        type: Number,
        default: null
      }
})

module.exports = mongoose.model("Role", roleSchema);
