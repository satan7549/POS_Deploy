let express = require('express');
let router = express.Router();

let printerController = require('./printer.controller');

const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

// authorization(Permissions.permissions.printer.create),
// authorization(Permissions.permissions.printer.view),
// authorization(Permissions.permissions.printer.update),
// authorization(Permissions.permissions.printer.delete),

//  insert Printer
router.post('/new', printerController.insertPrinter);

/* show */
router.get('/list/',printerController.showPrinters );

// /* show */
router.get('/show/:id',printerController.showPrinter );

// /* update */
 router.post('/update/:id', printerController.updatePrinter );

// /* update */
 router.delete('/delete/:id', printerController.deletePrinter);


module.exports = router;
