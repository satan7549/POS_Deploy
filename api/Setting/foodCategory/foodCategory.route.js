const express = require("express");
const router = express.Router();

const foodCategoryController = require("./foodCategory.controller");

/* Insert */
router.post("/new", foodCategoryController.createFoodCategory);

/* show */
router.get("/show", foodCategoryController.getAllFoodCategories);

// // /* edit */
router.get("/edit/:id", foodCategoryController.getFoodCategoryById);

// /* update */
router.post("/update/:id", foodCategoryController.updateFoodCategory);

// /*soft delete */
router.delete("/delete/:id",foodCategoryController.softDeleteFoodCategory);

module.exports = router;
