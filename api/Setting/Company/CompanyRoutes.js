
const express = require('express');
const router = express.Router();
const CompanyController = require('./CompanyController.js');

// // Test
// router.get("/", function (req, res, next) {
//     res.render('index', { title: 'Express' });
// });

// Create a new company
router.post('/new', CompanyController.createCompany);

// Get all companies
router.get('/list', CompanyController.getCompanys);

// Get a specific company by ID
router.get('/show/:id', CompanyController.getCompanyById);

// Update a company
router.put('/update/:id', CompanyController.updateCompany);

// Delete a company by id
router.delete('/delete/:id', CompanyController.deleteCompany);

// Get all outlets for a company
router.get('/:id/outlets', CompanyController.getOutletsForCompany);

module.exports = router;
