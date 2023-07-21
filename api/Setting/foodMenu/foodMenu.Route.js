const express = require("express");
const router = express.Router();

const foodMenuController = require("./foodMenu.Controller");

const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

    // authorization(Permissions.permissions.foodMenu.create),
    // authorization(Permissions.permissions.foodMenu.view),
    // authorization(Permissions.permissions.foodMenu.update),
    // authorization(Permissions.permissions.foodMenu.delete),

// /* add */
// router.get('/new', foodMenuController.addfoodMenu);

/* Insert */
router.post("/new", foodMenuController.foodMenuInsert);

/* show */
router.get("/list", foodMenuController.showFoodMenus);

/* edit */
router.get("/:id", foodMenuController.showFoodMenuById);

/* update */
router.put("/update/:id", foodMenuController.updateFoodMenu);

/* delete */
router.delete("/delete/:id", foodMenuController.deleteFoodMenu);

module.exports = router;