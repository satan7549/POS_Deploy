const express = require("express");
const router = express.Router();

const ingredientUnitController = require("./ingredientUnitController");

/* Insert */
router.post("/new", ingredientUnitController.ingredientUnitInsert);

/* show */
router.get("/list", ingredientUnitController.showIngredientUnits);

/* edit */
router.get("/:id", ingredientUnitController.showIngredientUnit);

/* update */
router.put("/update/:id", ingredientUnitController.updateIngredientUnit);

/* delete */
router.delete("/delete/:id", ingredientUnitController.deleteIngredientUnit);

module.exports = router;