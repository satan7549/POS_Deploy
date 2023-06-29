const { validateRecipe, validateUpdate } = require("./recipeValidator");
const IngredientModel = require("../ingredients/index");
// let FoodMenuModel = require("../foodMenu/foodMenu.model");
const RecipeModel = require("./index");

exports.recipeInsert = async (req, res) => {
  try {
    // Validation
    const { error, value } = validateRecipe(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const recipeExists = await RecipeModel.findOne({ name: value.name });

    if (recipeExists) {
      // Send Response
      return res.status(409).json({ message: "Recipe already exists!" });
    }

    const recipe = new RecipeModel(value);

    const savedRecipe = await recipe.save();

    res.status(200).json({
      message: "sucess",
      recipe: savedRecipe,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Display all recipe List
exports.showAllRecipes = async (req, res, next) => {
  try {
    const recipe = await RecipeModel.find();

    if (!recipe || recipe.length === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "success", recipe });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display Single Recipe
exports.showRecipe = async (req, res, next) => {
  try {
    const id = req.params.id;
    const recipe = await RecipeModel.findById(id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "success", recipe });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Recipe
exports.updateRecipe = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const recipe = await RecipeModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "success", recipe });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error updating table");
  }
};

//   // Delete Expenses
exports.deleteRecipe = async (req, res, next) => {
  try {
    let id = req.params.id;

    let recipe = await RecipeModel.deleteOne({ _id: id });

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    // res.status(200).json({ id });
    res.status(200).json({ message: "Recipe Deleted sucessfully" });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
