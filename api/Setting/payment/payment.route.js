const express = require('express');
const router = express.Router();

const paymentController = require('./payment.controller');

router.post('/new', paymentController.insertPayment);

router.get('/list', paymentController.getPayments);

router.get('/show/:id', paymentController.getPaymentById);

router.put('/update/:id', paymentController.updatePayment);

router.delete('/delete/:id', paymentController.deletePayment);

module.exports = router;
