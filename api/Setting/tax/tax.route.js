const express = require("express");
const router = express.Router();

const taxController = require("./tax.controller");
const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

// authorization(Permissions.permissions.tax.create),
// authorization(Permissions.permissions.tax.view),
// authorization(Permissions.permissions.tax.update),
// authorization(Permissions.permissions.tax.delete),


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
