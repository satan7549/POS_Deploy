const express = require("express");
const router = express.Router();

const foodCategoryController = require("./foodCategory.controller");

/* Insert */
router.post("/new", foodCategoryController.foodCategoryInsert);

/* show */
router.get("/list", foodCategoryController.showFoodCategorys);

// // /* edit */
router.get("/show/:id", foodCategoryController.showFoodCategory);

// /* update */
router.put("/update/:id", foodCategoryController.updateFoodCategory);

// /*soft delete */
router.delete("/delete/:id",foodCategoryController.deleteFoodCategory);

module.exports = router;
