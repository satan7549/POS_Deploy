const express = require("express");
const router = express.Router();

const modifierController = require("./modifier.controller");
const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

// authorization(Permissions.permissions.modifier.create),
// authorization(Permissions.permissions.modifier.view),
// authorization(Permissions.permissions.modifier.update),
// authorization(Permissions.permissions.modifier.delete),


/* Insert */
router.post("/new", modifierController.modifierInsert);

/* show */
router.get("/list", modifierController.showModifiers);

/* edit */
router.get("/:id", modifierController.showModifier);

/* update */
router.put("/update/:id", modifierController.updateModifier);

/* delete */
router.delete("/delete/:id", modifierController.deleteModifier);

module.exports = router;
