let express = require('express');
let router = express.Router(); // access the method of route

let userController = require('./user.controller');

    // router.post('/new', ( req, res, next)  => {
    //     res.send("hello world");
    // });

router.post('/new', userController.userInsert);

// user Login
router.post('/login', userController.login);

// all users
router.get('/list', userController.showUsers );

/* show */
router.get('/show/:id', userController.showUser );

/* update */
router.put('/update/:id', userController.updateUser );

// /* update */
router.delete('/delete/:id', userController.deleteUser);



module.exports = router;