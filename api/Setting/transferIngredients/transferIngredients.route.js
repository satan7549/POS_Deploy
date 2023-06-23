let express = require('express');
let router = express.Router();

let transferIngredientsController = require('./transferIngredients.controller');

/* Insert */
router.post('/new', transferIngredientsController.insertTransferIngredients);
  
// /* show */
 router.get('/list/',transferIngredientsController.showTransferIngredient);

// /* show */
router.get('/show/:id', transferIngredientsController.showTransferIngredients );

// // // /* update */
 router.post('/update/:id',transferIngredientsController.updateTransferIngredients );

// // /* update */
  router.delete('/delete/:id', transferIngredientsController.deleteTransferIngredients);


module.exports = router;
