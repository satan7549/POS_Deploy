let express = require('express');
let router = express.Router(); // access the method of route

let kitchenSalesController = require('./kitchenSales.controller');

// Insert
router.post('/new', kitchenSalesController.kitchenSalesInsert);

//Show List
router.get('/list', kitchenSalesController.showKitchenSaless );

//Display one single Detail
router.get('/show/:id', kitchenSalesController.showKitchenSales );

//Update single Details
router.post('/update/:id', kitchenSalesController.updateKitchenSales );

//Delete single Details
router.delete('/delete/:id', kitchenSalesController.deleteKitchenSales);

module.exports = router;