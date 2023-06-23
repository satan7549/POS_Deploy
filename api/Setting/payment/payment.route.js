const express = require('express');
const router = express.Router();

const paymentMethodController = require('./payment.controller');

router.post('/new', paymentMethodController.insertPaymentMethod);

router.get('/list', paymentMethodController.getPaymentMethods);

router.get('/show/:id', paymentMethodController.getPaymentMethodById);

router.put('/update/:id', paymentMethodController.updatePaymentMethod);

router.delete('/delete/:id', paymentMethodController.deletePaymentMethod);

module.exports = router;
