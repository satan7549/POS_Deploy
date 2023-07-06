const express = require("express");
const router = express.Router();

const foodMenuController = require("./foodMenuController");

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