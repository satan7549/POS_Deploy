const express = require("express");
const router = express.Router();

const ingredientUnitController = require("./ingredientUnit.Controller");

const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

    // authorization(Permissions.permissions.ingredientUnit.create),
    // authorization(Permissions.permissions.ingredientUnit.view),
    // authorization(Permissions.permissions.ingredientUnit.update),
    // authorization(Permissions.permissions.ingredientUnit.delete),

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