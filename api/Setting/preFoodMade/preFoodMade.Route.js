const express = require("express");
const router = express.Router();

const preFoodMadeController = require("./preFoodMade.Controller");
const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

// authorization(Permissions.permissions.preFoodMade.create),
// authorization(Permissions.permissions.preFoodMade.view),
// authorization(Permissions.permissions.preFoodMade.update),
// authorization(Permissions.permissions.preFoodMade.delete),

/* Insert */
router.post("/new", preFoodMadeController.preFoodMadeInsert);

/* show */
router.get("/list", preFoodMadeController.showPreFoodMades);

/* edit */
router.get("/:id", preFoodMadeController.showPreFoodMadeById);

/* update */
router.put("/update/:id", preFoodMadeController.updatePreFoodMade);

/* delete */
router.delete("/delete/:id", preFoodMadeController.deletePreFoodMade);

module.exports = router;