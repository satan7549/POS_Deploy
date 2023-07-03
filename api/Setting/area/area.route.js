let express = require('express');
let router = express.Router();

let areaController = require('./area.controller');

// /* add */
// router.get('/new', areaController.addArea);

/* Insert */
router.post('/new', areaController.insertArea);
  
/* show */
router.get('/list', areaController.showAreas );

// // /* edit */
router.get('/show/:id', areaController.editArea );

// /* update */
router.put('/update/:id', areaController.updateArea );

// /* update */
router.delete('/delete/:id', areaController.deleteArea);


module.exports = router;
