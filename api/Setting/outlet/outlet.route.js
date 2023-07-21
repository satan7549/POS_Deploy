const express = require("express");
const router = express.Router(); // access the method of route

const outletController = require("./outlet.controller");
const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

// authorization(Permissions.permissions.outlet.create),
// authorization(Permissions.permissions.outlet.view),
// authorization(Permissions.permissions.outlet.update),
// authorization(Permissions.permissions.outlet.delete),

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
router.get("/find-company/:id", outletController.findCompanyByOutletId);

module.exports = router;
