const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const billingSchema = Schema({
  billing_name: { type: String, required: true, },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
  email_address: { type: String, required: true },
  billingDate: { type: Date, required: true, },
  totalAmount: { type: Number, required: true,  },
  paymentMethod: { type: String, required: true, },
  transactionStatus: { type: String, required: true, },
  del_status: { type: String, enum: { values: ["Live", "Deleted"], message: "Values is not matched", }, default: "Live", },
  billingPasswordToken: String,
  billingPasswordExpires: Date
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
