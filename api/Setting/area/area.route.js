let express = require('express');
let router = express.Router();

let areaController = require('./area.controller');

// /* add */
// router.get('/new', areaController.addArea);

/* Insert */
router.post('/new', areaController.insertArea);
  
/* show */
router.get('/show', areaController.showAreas );

// // /* edit */
router.get('/edit/:id', areaController.editArea );

// /* update */
router.post('/update/:id', areaController.updateArea );

// /* update */
router.delete('/delete/:id', areaController.deleteArea);


module.exports = router;
