let express = require('express');
let router = express.Router(); // access the method of route

let roleController = require('./role.controller');

    // router.post('/new', ( req, res, next)  => {
    //     res.send("hello world");
    // });

// Insert
router.post('/new', roleController.roleInsert);

//Show List
router.get('/list', roleController.showRoles );

//Display one single Detail
router.get('/show/:id', roleController.showRole );

//Update single Details
router.post('/update/:id', roleController.updateRole );

//Delete single Details
router.delete('/delete/:id', roleController.deleteRole);

module.exports = router;