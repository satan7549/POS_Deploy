const express = require("express");
const router = express.Router();

const roleController = require("./role.controller");

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