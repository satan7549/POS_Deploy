const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    name:{
    type: String,
    maxlength: [30, "Maximum 30 charcters are permitted"],
    minLength: [3, "name should have more than 3 character"],
    required: [true,"please enter name"],
    trim: true,
    },

    cuisine: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "name should have more than 5 character"],
    required: [true,"please enter cuisine"],
    trim: true,
    },

    // Array of outlet references
    outlets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Outlet'
    }],
    
    del_status: {
        type: String,
        enum: {
          values: ["activate","deactivate"],
          message: `activate or deactivate`,
        },
        default: "Live",
      },
});

module.exports = mongoose.model("Company", CompanySchema);