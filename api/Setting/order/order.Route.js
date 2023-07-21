const express = require("express");
const router = express.Router();

const orderController = require("./order.Controller");

const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

// authorization(Permissions.permissions.order.create),
// authorization(Permissions.permissions.order.view),
// authorization(Permissions.permissions.order.update),
// authorization(Permissions.permissions.order.delete),

/* Insert */
router.post("/new", orderController.orderInsert);

/* show */
router.get("/list", orderController.showOrders);

/* edit */
router.get("/:id", orderController.showOrder);

/* update */
router.put("/update/:id", orderController.updateOrder);

/* delete */
router.delete("/delete/:id", orderController.deleteOrder);

module.exports = router; 