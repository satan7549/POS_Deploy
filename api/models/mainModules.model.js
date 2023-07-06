const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mainModulesSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      name: {
        type: String,
        default: null
      },
      del_status: {
        type: String,
        required: true,
        default: 'Active'
      }
})

module.exports = mongoose.model("MainModules", mainModulesSchema);