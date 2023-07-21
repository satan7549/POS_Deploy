const express = require("express");
const router = express.Router();

const ingredientController = require("./ingredient.controller");

const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

    // authorization(Permissions.permissions.ingredients.create),
    // authorization(Permissions.permissions.ingredients.view),
    // authorization(Permissions.permissions.ingredients.update),
    // authorization(Permissions.permissions.ingredients.delete),

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
