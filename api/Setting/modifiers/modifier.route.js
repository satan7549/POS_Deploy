const express = require("express");
const router = express.Router();

const modifierController = require("./modifier.controller");



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
