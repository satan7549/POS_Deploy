const express = require("express");
const router = express.Router();

const preFoodMadeController = require("./preFoodMade.Controller");

/* Insert */
router.post("/new", preFoodMadeController.preFoodMadeInsert);

/* show */
router.get("/list", preFoodMadeController.showPreFoodMade);

/* edit */
router.get("/:id", preFoodMadeController.showPreFoodMadesById);

/* update */
router.put("/update/:id", preFoodMadeController.updatePreFoodMade);

/* delete */
router.delete("/delete/:id", preFoodMadeController.deletePreFoodMade);

module.exports = router;