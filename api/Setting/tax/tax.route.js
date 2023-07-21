const express = require("express");
const router = express.Router();

const taxController = require("./tax.controller");



/* Insert */
router.post("/new", taxController.createTax);

/* show */
router.get("/list", taxController.getTaxes);

/* edit */
router.get("/:id", taxController.getTaxById);

/* update */
router.put("/update/:id", taxController.updateTax);

/* delete */
router.delete("/delete/:id", taxController.deleteTax);



module.exports = router;
