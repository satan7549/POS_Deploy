const express = require("express");
const router = express.Router();

const kotController = require("./kot.controller");

/* Insert */
router.post("/new", kotController.insertKot);

/* show */
router.get("/list", kotController.showAllKots);

/* kot detail */
router.get("/:id", kotController.showSingleKot);

/* update */
router.put("/update/:id", kotController.updateKot);

/* delete */
router.delete("/delete/:id", kotController.deleteKot);

module.exports = router;
