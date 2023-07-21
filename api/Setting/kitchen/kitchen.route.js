const express = require("express");
const router = express.Router();

const kitchenController = require("./kitchen.controller");

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

module.exports = router;
