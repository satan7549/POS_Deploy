const express = require("express");
const router = express.Router();
const CompanyController = require("./CompanyController.js");

// Create a new company
router.post("/new", CompanyController.outletInsert);

// Get all companies
router.get("/list", CompanyController.showAllOutlets);

// Get a specific company by ID
router.get("/show/:id", CompanyController.showSingleOutlet);

// Get all outlets for a company
router.get("/:id/outlets", CompanyController.findCompanyByOutletId);

// Update a company
router.put("/update/:id", CompanyController.updateOutlet);

// Delete a company by id
router.delete("/delete/:id", CompanyController.deleteOutlet);

module.exports = router;
