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
router.get('/list', authorization(100), userController.showUsers);

/* show */
router.get('/show/:id', authorization(102), userController.showUser);

/* update */
router.put('/update/:id', authorization(104), userController.updateUser);

/* Delete */
router.delete('/delete/:id', authorization(103), userController.deleteUser);

module.exports = router;
