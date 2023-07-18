const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const preMadeFoodSchema = Schema({
  nameFood: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "persons should have more than 5 character"],
    required: [true, "please enter foodName"],
    trim: true,
  },
  category: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "waiter name should have more than 3 character"],
    required: [true, "please enter description"],
    trim: true,
  },
  purchasePrice: {
    type: Number,
    required: true
  },
  lowQAmt: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    enum: {
      values: ["Gm", "Kg", "L", "Ml", "Mg"],
      message: "Value is not supported",
    },
    default: "Gm",
  },
  del_status: {
    type: String,
    required: true,
    default: "Active",
  },
});

module.exports = mongoose.model('PreMadeFood', preMadeFoodSchema);
