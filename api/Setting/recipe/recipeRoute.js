const express = require("express");
const router = express.Router();

const recipeController = require("./recipeController");

router.post("/new", recipeController.recipeInsert);
router.get("/list", recipeController.showAllRecipes);
router.get("/:id", recipeController.showRecipe);
router.put("/update/:id", recipeController.updateRecipe);
router.delete("/delete/:id", recipeController.deleteRecipe);

module.exports = router;
