const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const userSchema = Schema({
  full_name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email_address: {
    type: String,
    required: true,
    validate: [validator.isEmail, "please enter valid email"],
  },
  password: {
    type: String,
    required: true,
  },
  company_id: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Super_Admin", "Admin", "Employee","Customer"],
    required: true,
  },
  designation: {
    type: String,
    default: null,
  },
  will_login: {
    type: String,
    default: "No",
  },
  outlet_id: {
    type: Number,
    default: null,
  },
  outlets: {
    type: String,
    default: null,
  },
  kitchens: {
    type: String,
    default: null,
  },
  account_creation_date: {
    type: String,
    default: null,
  },
  language: {
    type: String,
    default: "english",
  },
  last_login: {
    type: String,
    default: null,
  },
  created_id: {
    type: Number,
    default: null,
  },
  active_status: {
    type: String,
    default: "Active",
  },
  del_status: {
    type: String,
    default: "Live",
  },
  question: {
    type: String,
    default: null,
  },
  answer: {
    type: String,
    default: null,
  },
  login_pin: {
    type: String,
    default: null,
  },
  order_receiving_id: {
    type: Number,
    default: 0,
  },
  role_id: {
    type: Number,
    default: null,
  },
  forgotPasswardToken: String,
  forgotPasswardExpiry: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//encrypt password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//validate the password with passedon user password
userSchema.methods.isValidatedPassword = async function (userSendPasswrord) {
  return await bcrypt.compare(userSendPasswrord, this.password);
};

//create and return JWT token
userSchema.methods.getToken = async function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRY,
    }
  );
};

module.exports = mongoose.model("User", userSchema);
