const express = require("express");
const router = express.Router();

const deliveryPartnerController = require("./deliveryPartner.controller");

// /* add */
// router.get('/new', foodMenuController.addfoodMenu);

/* Insert */
router.post("/new", deliveryPartnerController.deliveryPartnerInsert);

/* show */
router.get("/list", deliveryPartnerController.showAllDeliveryPartners);

/* edit */
router.get("/:id", deliveryPartnerController.showDeliveryPartnerById);

/* update */
router.put("/update/:id", deliveryPartnerController.updateDeliveryPartner);

/* delete */
router.delete("/delete/:id", deliveryPartnerController.deleteDeliveryPartner);

module.exports = router;