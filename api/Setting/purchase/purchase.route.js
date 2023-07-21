let express = require('express');
let router = express.Router();

let purchaseController = require('./purchase.controller');

const {
  authorization,
  isLoggedIn
} = require("../../../middleware/userAuth");
const {
  Permissions
} = require("../user/permissions");

// authorization(Permissions.permissions.purchase.create),
// authorization(Permissions.permissions.purchase.view),
// authorization(Permissions.permissions.purchase.update),
// authorization(Permissions.permissions.purchase.delete),

/* Insert */
router.post('/new', purchaseController.insertPurchase);
  
// /* show */
router.get('/list/',purchaseController.showPurchases);

// /* show */
router.get('/show/:id', purchaseController.showPurchase );

// // /* update */
 router.post('/update/:id',purchaseController.updatePurchase );

// // /* update */
  router.delete('/delete/:id', purchaseController.deletePurchase);


module.exports = router;
