const express = require("express");
const router = express.Router();

const billingController = require("./billing.controller");
const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

// authorization(Permissions.permissions.billing.create),
// authorization(Permissions.permissions.billing.view),
// authorization(Permissions.permissions.billing.update),
// authorization(Permissions.permissions.billing.delete),

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