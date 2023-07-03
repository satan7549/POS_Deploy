let express = require('express');
let router = express.Router();

let kitchenController = require('./kitchen.controller');
  
//  insert Kitchen
router.post('/new', kitchenController.insertKitchen);

/* show */
router.get('/list/', kitchenController.showKitchen );

/* show */
router.get('/show/:id', kitchenController.showKitchens );

/* update */
router.post('/update/:id', kitchenController.updateKitchen );

/* update */
router.delete('/delete/:id', kitchenController.deleteKitchen);


module.exports = router;
