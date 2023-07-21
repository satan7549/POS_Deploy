const express = require("express");
const router = express.Router();

const foodMenuController = require("./foodMenu.Controller");

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