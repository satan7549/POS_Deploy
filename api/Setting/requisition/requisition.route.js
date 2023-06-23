let express = require('express');
let router = express.Router();

let requisitionController = require('./requisition.controller');

/* Insert */
router.post('/new', requisitionController.insertRequisition);
  
// /* show */
 router.get('/list/',requisitionController.showRequisitions);

// /* show */
 router.get('/show/:id', requisitionController.showRequisition );

// // // /* update */
 router.post('/update/:id',requisitionController.updateRequisition );

// // /* update */
  router.delete('/delete/:id', requisitionController.deleteRequisition);


module.exports = router;
