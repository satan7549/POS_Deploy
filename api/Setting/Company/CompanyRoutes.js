
const express = require('express');
const router = express.Router();
const CompanyController = require('./CompanyController.js');

// Test
router.get("/", function (req, res, next) {
    res.render('index', { title: 'Express' });
});

// Create a new restaurantc
router.post('/createcompany', CompanyController.createCompany);

// Get all restaurants
router.get('/company', CompanyController.getCompanys);

// Get a specific restaurant by ID
router.get('/company/:id', CompanyController.getCompanyById);

// Update a restaurant
router.put('/company/:id', CompanyController.updateCompany);

// Delete a restaurant
router.delete('/company/:id', CompanyController.deleteCompany);

// Get all outlets for a company
router.get('/:companyId/outlets', CompanyController.getOutletsForCompany);

module.exports = router;
