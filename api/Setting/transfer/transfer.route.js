let express = require('express');
let router = express.Router();

let transferController = require('./transfer.controller');

/* Insert */
router.post('/new', transferController.insertTransfer);
  
// /* show */
 router.get('/list/',transferController.showTransfers);

// /* show */
router.get('/show/:id', transferController.showTransfer );

// // // /* update */
 router.post('/update/:id',transferController.updateTransfer );

// // /* update */
  router.delete('/delete/:id', transferController.deleteTransfer);


module.exports = router;
