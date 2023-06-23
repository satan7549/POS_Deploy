let express = require('express');
let router = express.Router();

let tableController = require('./table.controller');
  
//  insert table
router.post('/new', tableController.insertTable);



/* show */
router.get('/list/', tableController.showTables );

/* show */
router.get('/show/:id', tableController.showTable );

/* update */
router.post('/update/:id', tableController.updateTable );

/* update */
router.delete('/delete/:id', tableController.deleteTable);


module.exports = router;

