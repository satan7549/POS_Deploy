const mongoose = require("mongoose");
const {
  validateIngredient,
  validateUpdate,
} = require("./ingredient.validator");
const IngredientModel = require("./index");

//insert new Expenses
exports.ingredientInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateIngredient(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const ingredientExists = await ingredientModel.exists({ name: value.name });

    if (ingredientExists) {
      // Send Response
      return res.status(200).json("Ingredient already exists!");
    }

    // Insert ingredient
    const ingredientModel = new IngredientModel(value);
    const savedData = await ingredientModel.save();

    // Send Response
    res.status(200).json({ message: "success", ingredient: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error inserting data into the database");
  }
};

// Display Single Ingredient
exports.showIngredient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ingredient = await IngredientModel.findOne({ _id: id });

    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }

    res.status(200).json({ message: "success", ingredient });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showingredients = async (req, res, next) => {
  try {
    const ingredient = await IngredientModel.find();

    if (!ingredient || ingredient.length === 0) {
      return res.status(404).json({ message: "ingredient not found" });
    }

    res.status(200).json({ message: "success", ingredient });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Expenses
exports.updateIngredient = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const ingredient = await IngredientModel.findOneAndUpdate(
      { _id: id },
      value,
      {
        new: true,
      }
    );

    if (!ingredient) {
      console.log("Ingredient not found");
      return res.status(404).json({ message: "Ingredient not found" });
    }

    res.status(200).json({ ingredient });
  } catch (error) {
    console.log(error);
    // Send Error Response
    res.status(500).json("Error updating table");
  }
};

//   // Delete Expenses
exports.deleteIngredient = async (req, res, next) => {
  try {
    let id = req.params.id;

    let ingredient = await IngredientModel.deleteOne({ _id: id });

    if (!ingredient) {
      console.log("Ingredient not found");
      return res.status(404).json({ message: "Ingredient not found" });
    }

    // res.status(200).json({ id });
    res.status(200).json("Id Deleted");
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
