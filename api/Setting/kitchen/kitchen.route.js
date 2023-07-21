const express = require("express");
const router = express.Router();

const kitchenController = require("./kitchen.controller");

const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

    // authorization(Permissions.permissions.kitchen.create),
    // authorization(Permissions.permissions.kitchen.view),
    // authorization(Permissions.permissions.kitchen.update),
    // authorization(Permissions.permissions.kitchen.delete),

    /* Insert */
    router.post("/new", kitchenController.kitchenInsert);

/* show */
router.get("/list", kitchenController.showAllKitchens);

/* edit */
router.get("/:id", kitchenController.showKitchen);

/* update */
router.put("/update/:id", kitchenController.updateKitchen);

/* delete */
router.delete("/delete/:id", kitchenController.deleteKitchen);

// Find Model for Test
router.get("/find-model/:id", kitchenController.findModelByKitchenId);

module.exports = router;

