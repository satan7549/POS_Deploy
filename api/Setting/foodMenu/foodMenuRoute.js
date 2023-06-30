const express = require("express");
const router = express.Router(); // access the method of route

const foodMenuController = require("./foodMenuController");

// Insert
router.post("/new", foodMenuController.foodMenuInsert);

module.exports = router;
