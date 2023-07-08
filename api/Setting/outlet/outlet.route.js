const express = require("express");
const router = express.Router(); // access the method of route

const outletController = require("./outlet.controller");

// Insert
router.post('/new', outletController.outletInsert);

//Show List
router.get("/list", outletController.showAllOutlets);

//Display one single Detail
router.get("/show/:id", outletController.showSingleOutlet);

//Update single Details
router.put("/update/:id", outletController.updateOutlet);

//Delete single Details
router.delete("/delete/:id", outletController.deleteOutlet);

// Find Company for Test
router.get("/find-company", outletController.findCompanyByOutletId);

module.exports = router;
