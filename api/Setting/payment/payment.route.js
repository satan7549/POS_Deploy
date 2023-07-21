const express = require('express');
const router = express.Router();

const paymentController = require('./payment.controller');

const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

// authorization(Permissions.permissions.payment.create),
// authorization(Permissions.permissions.payment.view),
// authorization(Permissions.permissions.payment.update),
// authorization(Permissions.permissions.payment.delete),

router.post('/new', paymentController.insertPayment);

router.get('/list', paymentController.getPayments);

router.get('/show/:id', paymentController.getPaymentById);

router.put('/update/:id', paymentController.updatePayment);

router.delete('/delete/:id', paymentController.deletePayment);

module.exports = router;
