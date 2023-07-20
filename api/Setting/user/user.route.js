const express = require('express');
const router = express.Router(); // access the method of route
const jwt = require("jsonwebtoken");
const userController = require('./user.controller');
const {
    accessControlMiddleware
} = require("./access.middleware");
const {
    authorization, isLoggedIn
} = require("./role.auth");

// add user
router.post('/new', userController.userInsert);

// user Login
router.post('/login', userController.login);

// router.use(isLoggedIn);
// all users
router.get('/list', authorization, userController.showUsers);

/* show */
router.get('/show/:id', authorization, userController.showUser);

/* update */
router.put('/update/:id', authorization, userController.updateUser);

/* Delete */
router.delete('/delete/:id', authorization, userController.deleteUser);

module.exports = router;
