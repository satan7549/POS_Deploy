let express = require('express');
let router = express.Router();

let companiesController = require('./companies.controller');


//  insert table
router.post('/new', companiesController.companiesInsert);

//Show List
router.get('/list', companiesController.showCompanies_s );

//Display one single Detail
router.get('/show/:id', companiesController.showCompanies );

//Update single Details
router.post('/update/:id', companiesController.updateCompanies );

//Delete single Details
router.delete('/delete/:id', companiesController.deleteCompanies);

module.exports = router;