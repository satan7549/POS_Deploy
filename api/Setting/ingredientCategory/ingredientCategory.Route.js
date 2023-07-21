const express = require("express");
const router = express.Router();

const ingredientCategoryController = require("./ingredientCategory.Controller");

const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

    // authorization(Permissions.permissions.ingredientCategory.create),
    // authorization(Permissions.permissions.ingredientCategory.view),
    // authorization(Permissions.permissions.ingredientCategory.update),
    // authorization(Permissions.permissions.ingredientCategory.delete),

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