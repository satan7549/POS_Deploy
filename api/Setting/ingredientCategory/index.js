const mongoose = require("mongoose");

const ingredientCategorySchema = new mongoose.Schema({
  
  ingredientCategory_name: {
    type: String,
    maxlength: [50, "Maximum 50 charcters are permitted"],
    minLength: [5, "ingredientCategory_name should have more than 5 character"],
    required: [true, "please enter ingredientCategory_name"],
    trim: true,
    default: null
  },

  description: {
     type: String,
    maxlength: [100, "Maximum 100 charcters are permitted"],
      trim: true,
    default: null
  },

  // user_id: {
  //   type: Number,
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   require: [true, "please enter user_id"],
  // },

  company_id: {
    type: Number,
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

const IngredientCategory = mongoose.model('IngredientCategory', ingredientCategorySchema);

module.exports = IngredientCategory;
