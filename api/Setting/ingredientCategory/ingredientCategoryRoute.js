const express = require("express");
const router = express.Router();

const ingredientCategoryController = require("./ingredientCategoryController");

/* Insert */
router.post("/new", ingredientCategoryController.ingredientCategoryInsert);

/* show */
router.get("/list", ingredientCategoryController.showIngredientCategorys);

/* edit */
router.get("/:id", ingredientCategoryController.showIngredientCategory);

/* update */
router.put("/update/:id", ingredientCategoryController.updateIngredientCategory);

/* delete */
router.delete("/delete/:id", ingredientCategoryController.deleteIngredientCategory);

module.exports = router;