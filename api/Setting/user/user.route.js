const express = require('express');
const router = express.Router(); // access the method of route
const jwt = require("jsonwebtoken");
const userController = require('./user.controller');
const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("./permissions");
// authorization(Permissions.permissions.user.create),
// authorization(Permissions.permissions.user.view),
// authorization(Permissions.permissions.user.update),
// authorization(Permissions.permissions.user.delete),

// add user
router.post('/new',userController.logout, userController.userInsert);

// user Login
router.post('/login',userController.logout, userController.login);

//user logout
router.get('/logout', userController.logout);

// router.use(isLoggedIn);
// all users
router.get('/list', userController.showUsers);

/* show */
router.get('/show/:id', userController.showUser);

/* update */
router.put('/update/:id', userController.updateUser);

/* Delete */
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;