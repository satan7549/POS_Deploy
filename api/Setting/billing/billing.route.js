const express = require("express");
const router = express.Router();

const billingController = require("./billing.controller");

// /* add */
// router.get('/new', foodMenuController.addfoodMenu);

/* Insert */
router.post("/new", billingController.billingInsert);

/* show */
router.get("/list", billingController.showAllBills);

/* edit */
router.get("/:id", billingController.showBilling);

/* update */
router.put("/update/:id", billingController.updateBilling);

/* delete */
router.delete("/delete/:id", billingController.deleteBilling);

module.exports = router;