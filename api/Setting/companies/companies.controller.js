let mongoose = require('mongoose');
let { validateCompanies, validateUpdate } = require('./companies.validator');
// let { validateCompanies } = require('./companies.validator');
let CompaniesModel = require('./index');
let companies = require('./index');

//insert new table
exports.companiesInsert = async (req,res,next) => {
    try {
        // Validation
    let { error, value } = validateCompanies(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    let companiesModel = new CompaniesModel(value);
    let savedData = await companiesModel.save();

    // Send Response
    res.status(200).json('Data inserted');
    } catch (error) {

      console.log(error);
       // Send Error Response
    res.status(500).json('Error inserting data into database'); 
    }
};

// Display List
exports.showCompanies_s = async (req, res, next) => {
  try {
    let companies = await CompaniesModel.find();
    if (!companies || companies.length === 0) {
      console.log('Companies not found');
      return res.status(404).json({ message: 'Companies not found' });
    }
    res.status(200).json({ companies });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Display one single Detail
exports.showCompanies = async (req, res, next) => {
  try {
    let id = req.params.id;
    let companies = await CompaniesModel.findOne({ _id: id });

    if (!companies) {
      console.log('Companies not found');
      return res.status(404).json({ message: 'Companies not found' });
    }

    res.status(200).json({ companies });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Role
exports.updateCompanies = async (req, res, next) => {
    try {
      let id = req.params.id;
  
      // Validation
      let { error, value } = validateUpdate(req.body);
  
      // Check Error in Validation
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      let companies = await CompaniesModel.findOneAndUpdate({ _id: id }, value, {
        new: true
      });
  
      if (!companies) {
        console.log('Companies not found');
        return res.status(404).json({ message: 'Companies not found' });
      }
  
      res.status(200).json({ companies });
    } catch (error) {
  
      console.log(error);
      // Send Error Response
      res.status(500).json('Error updating table');
    }
  };  
  
  // Delete Companies
  exports.deleteCompanies = async (req, res, next) => {
    try {
      let id = req.params.id;
  
     let companies = await CompaniesModel.deleteOne({ _id: id });
  
      if (!companies) {
        console.log('Companies not found');
        return res.status(404).json({ message: 'Companies not found' });
      }
  
      res.status(200).json({ id });
    } catch (error) {
      // Send Error Response
      res.status(500).json({ error });
    }
  };