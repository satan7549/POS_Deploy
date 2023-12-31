const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roleSchema = new Schema({
  role_name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [3, "role_name should have more than 3 character"],
    required: [true, "please enter role_name"],
    trim: true,
  },
  description: {
    type: String,
    maxlength: [200, "Maximum 200 charcters are permitted"],
    trim: true,
    default: null,
  },
  whoCreate: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [3, "whoCreate should have more than 3 character"],
  },
  company_id: {
    type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  createdAt: { type: Date, default: Date.now },
  del_status: {
    type: String,
    enum: { values: ["Live", "Deleted"], message: "Values is not matched" },
    default: "Live",
  },
});

module.exports = mongoose.model("Role", roleSchema);
