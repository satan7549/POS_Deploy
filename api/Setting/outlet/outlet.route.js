let express = require('express');
let router = express.Router(); // access the method of route

let outletController = require('./outlet.controller');

// router.post('/new', ( req, res, next)  => {
//     res.send("hello world");
// });

// Insert
router.post('/new', outletController.outletInsert);

//Show List
router.get('/list', outletController.showOutlets);

//Display one single Detail
router.get('/show/:id', outletController.showOutlet);

//Update single Details
router.post('/update/:id', outletController.updateOutlet);

//Delete single Details
router.delete('/delete/:id', outletController.deleteOutlet);


// Find Company for Test
router.get('/find-company', outletController.findCompanyByOutletId)


module.exports = router;