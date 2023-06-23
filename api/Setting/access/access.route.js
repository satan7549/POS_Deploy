let express = require('express');
let router = express.Router();

let accessController = require('./access.controller');

// /* add */
// router.get('/new', areaController.addArea);

/* Insert */
router.post('/new', accessController.insertAccess);
  
/* show */
// router.get('/show', areaController.showAreas );

// // /* edit */
// router.get('/edit/:id', areaController.editArea );

// /* update */
// router.post('/update/:id', areaController.updateArea );

// /* update */
// router.delete('/delete/:id', areaController.deleteArea);


module.exports = router;
