const express = require('express');
const router = express.Router(); // access the method of route

const userController = require('./user.controller');
const {
    accessControlMiddleware
} = require("./access.middleware");
const {
    checkRole
} = require("./role.auth");

// add user
router.post('/new', userController.userInsert);

// user Login
router.post('/login', userController.login);

// all users
router.get('/list',accessControlMiddleware, userController.showUsers);

/* show */
router.get('/show/:id',accessControlMiddleware, userController.showUser);

/* update */
router.put('/update/:id',accessControlMiddleware, userController.updateUser);

// /* update */
router.delete('/delete/:id',accessControlMiddleware, checkRole, userController.deleteUser);

module.exports = router;