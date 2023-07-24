const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const billingSchema = Schema({
  billing_name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [3, "billing_name should have more than 3 character"],
    required: [true, "please enter billing_name"],
    trim: true,
    default: null,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "please enter userID"],
  },
  email_address: {
     type: String,
      required: true,
      unique: true,
     },
  billingDate: {
    type: Date,
    default: Date.now,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [3, "paymentMethod name should have more than 3 character"],
    required: [true, "please enter paymentMethod"],
    trim: true,
  },
  transactionStatus: {
    type: String,
    enum: {
      values: ["Pending", "Done", "Failed"],
      message: "Values is not matched",
    },
    default: "Done",
  },
  del_status: {
    type: String,
    enum: {
      values: ["Live", "Deleted"],
      message: "Values is not matched",
    },
    default: "Live",
  },
});

billingSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

billingSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, "SecretKey", {
    expiresIn: "3D"
  });
};

billingSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

billingSchema.methods.getBillingPasswordToken = function () {
  const getToken = crypto.randomBytes(20).toString("hex");
  this.billingPasswordToken = crypto
    .createHash("sha256")
    .update(getToken)
    .digest("hex");
  this.billingPasswordExpires = Date.now() + 15 * 60 * 1000;
  return getToken;
};

billingSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpires = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("Billing", billingSchema);
