const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;
const userSchema = Schema({
  username: {
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
    unique: true,
    required: [true, "please enter email"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please provide the valid email address");
      }
    },
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
      values: ["Super_Admin", "Admin", "Employee", "Customer"],
      message: `Value is not supported`,
    },
    required: true,
  },

  designation: {
    type: String,
    default: null,
  },

  outlet_id: {
    type: Number,
    default: null,
  },

  admin_id: {
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
  return jwt.sign({
      id: this._id,
    },
    process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    }
  );
};

module.exports = mongoose.model("User", userSchema);