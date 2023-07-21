let express = require('express');
let router = express.Router();

let tableController = require('./table.controller');
const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

// authorization(Permissions.permissions.table.create),
// authorization(Permissions.permissions.table.view),
// authorization(Permissions.permissions.table.update),
// authorization(Permissions.permissions.table.delete),
  
//  insert table
router.post('/new', tableController.insertTable);

/* show */
router.get('/list/', tableController.showTables );

/* show */
router.get('/show/:id', tableController.showTable );

/* update */
router.put('/update/:id', tableController.updateTable );

/* update */
router.delete('/delete/:id', tableController.deleteTable);

module.exports = router;

