
const express = require('express');
const router = express.Router();
const CompanyController = require('./Company.Controller');

const {
    authorization,
    isLoggedIn
} = require("../../../middleware/userAuth");
const {
    Permissions
} = require("../user/permissions");

// authorization(Permissions.permissions.company.create),
// authorization(Permissions.permissions.company.view),
// authorization(Permissions.permissions.company.update),
// authorization(Permissions.permissions.company.delete),

// Create a new company
router.post('/new', CompanyController.createCompany);

// Get all companies
router.get('/list', CompanyController.getCompanys);

// Get a specific company by ID
router.get('/show/:id', CompanyController.getCompanyById);

// Get all outlets for a company
router.get('/:id/outlets', CompanyController.getOutletsForCompany);

// Update a company
router.put('/update/:id', CompanyController.updateCompany);

// Delete a company by id
router.delete('/delete/:id', CompanyController.deleteCompany);


module.exports = router;
