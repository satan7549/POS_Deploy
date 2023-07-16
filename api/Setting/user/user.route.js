const express = require('express');
const router = express.Router(); // access the method of route

const userController = require('./user.controller');
const {
    accessControlMiddleware
} = require("./access.middleware");
const {
    authorization
} = require("./role.auth");

// add user
router.post('/new', userController.userInsert);

// user Login
router.post('/login', userController.login);

// all users
router.get('/list', authorization(101), userController.showUsers);

/* show */
router.get('/show/:id', userController.showUser);

/* update */
router.put('/update/:id', userController.updateUser);

// /* update */
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;