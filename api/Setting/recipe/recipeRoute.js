const express = require("express");
const router = express.Router();

const recipeController = require("./recipeController");

router.post("/new", recipeController.recipeInsert);
router.post("/list", recipeController.showAllRecipes);
router.get("/:id", recipeController.showRecipe);
router.get("/update/:id", recipeController.updateRecipe);
router.get("/delete/:id", recipeController.deleteRecipe);

module.exports = router;
