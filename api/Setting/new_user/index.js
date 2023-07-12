const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  outlet_id: {
    type: Number,
    default: null,
  },

  full_name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "name should have more than 5 character"],
    required: [true, "please enter name"],
    trim: true,
    default: null,
  },

  phone: {
    type: Number,
    min: [1000000000, "phone number should be equal 10 digit"],
    max: [9999999999, "phone number should be equal 10 digit"],
    required: [true, "Please enter phone"],
    default: null,
  },

  email: {
    type: String,
    required: [true, "please enter email"],
    trim: true,
    default: null,
    unique: true,
    validate: [validator.isEmail, "please enter valid email"],
  },

  password: {
    type: String,
    minLength: [6, "Password should have more than 6 character"],
    required: [true, "please enter password"],
    trim: true,
  },

  role: {
    type: String,
    enum: {
      values: ["Admin", "Employee", "Customer", "SuperAdmin", ],
      message: `Value is not supported`,
    },
    default: "Customer",
    required: true,
  },

  designation: {
    type: String,
    default: null,
  },

  admin_id: {
    type: Number,
    default: null,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);