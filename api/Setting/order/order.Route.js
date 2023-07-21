const express = require("express");
const router = express.Router();

const orderController = require("./order.Controller");

/* Insert */
router.post("/new", orderController.orderInsert);

/* show */
router.get("/list", orderController.showOrders);

/* edit */
router.get("/:id", orderController.showOrderDetail);

/* update */
router.put("/update/:id", orderController.updateOrder);

/*get order by table id */
router.get("/table/:id", orderController.getOrderByTableId);

/* delete */
router.delete("/delete/:id", orderController.deleteOrder);

module.exports = router;
