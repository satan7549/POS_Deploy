const express = require("express");
const router = express.Router();

const roleController = require("./role.controller");

const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

// authorization(Permissions.permissions.role.create),
// authorization(Permissions.permissions.role.view),
// authorization(Permissions.permissions.role.update),
// authorization(Permissions.permissions.role.delete),

// /* add */
// router.get('/new', foodMenuController.addfoodMenu);

/* Insert */
router.post("/new", roleController.roleInsert);

/* show */
router.get("/list", roleController.showRoles);

/* edit */
router.get("/:id", roleController.showRole);

/* update */
router.put("/update/:id", roleController.updateRole);

/* delete */
router.delete("/delete/:id", roleController.deleteRole);

module.exports = router;