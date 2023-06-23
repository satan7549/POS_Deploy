const express = require('express');
const router = express.Router();

const currencyController = require('./currency.controller');

// Insert a new currency
router.post('/new', currencyController.insertCurrency);

// Get a list of currencies
router.get('/list', currencyController.getCurrencies);

// Get a single currency by ID
router.get('/show/:id', currencyController.getCurrencyById);

// Update a currency by ID
router.put('/update/:id', currencyController.updateCurrency);

// Delete a currency by ID
router.delete('/delete/:id', currencyController.deleteCurrency);

module.exports = router;
