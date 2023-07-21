const express = require("express");
const router = express.Router();

const foodMenuController = require("./foodCombo.Controller");

const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

    // authorization(Permissions.permissions.foodCombos.create),
    // authorization(Permissions.permissions.foodCombos.view),
    // authorization(Permissions.permissions.foodCombos.update),
    // authorization(Permissions.permissions.foodCombos.delete),

    /* Insert */
    router.post("/new", foodMenuController.foodComboInsert);

/* show */
router.get("/list", foodMenuController.showAllFoodCombo);

/* edit */
router.get("/:id", foodMenuController.showFoodCombo);

/* update */
router.put("/update/:id", foodMenuController.updateFoodCombo);

/* delete */
router.delete("/delete/:id", foodMenuController.deleteFoodCombo);

module.exports = router;