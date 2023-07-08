const mongoose = require("mongoose");

const ingredientUnitSchema = new mongoose.Schema({

  
ingredientUnit_name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "ingredientUnit_name should have more than 5 character"],
    required: [true, "please enter ingredientUnit_name"],
    trim: true,
    default: null
  },

  description: {
    type: String,
    maxlength: [100, "Maximum 100 charcters are permitted"],
    minLength: [10, "description should have more than 10 character"],
    required: [true, "please enter description"],
    trim: true,
    default: null
  },

  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    require: [true, "please enter company_id"],
  },

  del_status: {
    type: String,
    enum: {
      values: ["Live", "Deleted"],
      message: "Value is not matched",
    },
    default: "Live",
  }

});

const IngredientUnit = mongoose.model('IngredientUnit', ingredientUnitSchema);

module.exports = IngredientUnit;
