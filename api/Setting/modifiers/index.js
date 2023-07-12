const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const modifierSchema = Schema({
  name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "name should have more than 5 character"],
    required: [true, "please enter modifier_name"],
    trim: true,
    default: null,
  },
  price: {
    type: Number,
    required: [true, "Please enter a modifier_price"],
  },
  description: {
    type: String,
    maxlength: [100, "Maximum 100 charcters are permitted"],
    minLength: [10, "modifier_description should have more than 10 character"],
    required: [true, "please enter modifier_description"],
    trim: true,
    default: null,
  },

  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: [true, "please enter Company_id"],
  },
  // tax_information: {
  //   type: String,
  //   maxlength: [100, "Maximum 100 charcters are permitted"],
  //   minLength: [10, "tax_information should have more than 10 character"],
  //   required: [true, "please enter tax_information"],
  //   trim: true,
  //   default: null
  // },
  // tax_string: {
  //   type: String,
  //   maxlength: [250, "Maximum 250 charcters are permitted"],
  //   minLength: [10, "tax_string should have more than 10 character"],
  //   required: [true, "please enter tax_string"],
  //   trim: true,
  //   default: null
  // },
  total_cost: {
    type: Number,
    required: [true, "Please enter a total_cost"],
  },
  del_status: {
    type: String,
    enum: ["Live", "Deleted"],
    default: "Live",
  },
});

module.exports = mongoose.model("Modifier", modifierSchema);
