const express = require("express");
const router = express.Router();

const orderController = require("./orderController");

// /* add */
// router.get('/new', orderController.addorder);

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