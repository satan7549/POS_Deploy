const express = require("express");
const router = express.Router();

const areaController = require("./area.controller");

/* Insert */
router.post("/new", areaController.insertArea);

/* show */
router.get("/list", areaController.showAreas);

/* find unique area */
router.get("/show/:id", areaController.findAreaByID);

/* update */
router.put("/update/:id", areaController.updateArea);

/* delete */
router.delete("/delete/:id", areaController.deleteArea);

module.exports = router;
