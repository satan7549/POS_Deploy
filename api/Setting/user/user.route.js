const express = require('express');
const router = express.Router(); // access the method of route

const userController = require('./user.controller');
const {
    checkRole
} = require("./role.auth");

router.post('/new', checkRole, userController.userInsert);

// user Login
router.post('/login', userController.login);

// all users
router.get('/list', checkRole, userController.showUsers);

/* show */
router.get('/show/:id', checkRole, userController.showUser);

/* update */
router.put('/update/:id', checkRole, userController.updateUser);

// /* update */
router.delete('/delete/:id', checkRole, userController.deleteUser);

module.exports = router;