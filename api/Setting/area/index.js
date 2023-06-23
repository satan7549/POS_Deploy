const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const areasSchema = Schema(
  {
    outlet_id: { 
      type: Number, 
      required: true, 
      default: 0 
    },
    area_name: { 
      type: String, 
      maxlength: 250, 
      default: null 
    },
    description: { 
      type: String, 
      maxlength: 100, 
      default: null 
    },
    company_id: { 
      type: Number, 
      default: null 
    },
    del_status: { 
      type: String, 
      maxlength: 50, 
      default: 'Live' 
    }
  }
);

module.exports = mongoose.model("Areas", areasSchema);