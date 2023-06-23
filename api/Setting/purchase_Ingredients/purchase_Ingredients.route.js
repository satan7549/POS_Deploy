let express = require('express');
let router = express.Router();

let  purchaseIngredientsController = require('./purchase_Ingredients.controller');

/* Insert */
router.post('/new',  purchaseIngredientsController.insertPurchaseIngredients);
  
// /* show */
router.get('/list/', purchaseIngredientsController.showPurchaseIngredient);

// /* show */
 router.get('/show/:id',  purchaseIngredientsController.showPurchaseIngredients );

// // /* update */
router.post('/update/:id',  purchaseIngredientsController.updatePurchaseIngredients);

// // /* update */
router.delete('/delete/:id',  purchaseIngredientsController.deletePurchaseIngredients);


module.exports = router;