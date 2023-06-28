let express = require("express");
let router = express.Router();

let ingredientController = require("./ingredient.controller");

// /* add */
// router.get('/new', areaController.addArea);

/* Insert */
router.post("/new", ingredientController.ingredientInsert);

/* show */
router.get("/list", ingredientController.showingredients);

/* edit */
router.get("/:id", ingredientController.showIngredient);

/* update */
router.put("/update/:id", ingredientController.updateIngredient);

/* delete */
router.delete("/delete/:id", ingredientController.deleteIngredient);

module.exports = router;
