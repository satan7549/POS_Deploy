let mongoose = require('mongoose');
let { validateOutlet, validateUpdate } = require('./outlet.validator');
// let { validateOutlet } = require('./outlet.validator');
let CompanyModel = require("../Company/Company")
let OutletModel = require('./index');
let outlet = require('./index');

//insert new table
exports.outletInsert = async (req, res, next) => {
  try {
    // Validation
    let { error, value } = validateOutlet(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    let outletModel = new OutletModel(value);
    let savedData = await outletModel.save();

    // Send Response
    res.status(200).json('Data inserted');
  } catch (error) {

    console.log(error);
    // Send Error Response
    res.status(500).json('Error inserting data into database');
  }
};

// Display List
exports.showOutlets = async (req, res, next) => {
  try {
    let outlet = await OutletModel.find();
    if (!outlet || outlet.length === 0) {
      console.log('Outlet not found');
      return res.status(404).json({ message: 'Outlet not found' });
    }
    res.status(200).json({ outlet });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Display one single Detail
exports.showOutlet = async (req, res, next) => {
  try {
    let id = req.params.id;
    let outlet = await OutletModel.findOne({ _id: id });

    if (!outlet) {
      console.log('Outlet not found');
      return res.status(404).json({ message: 'Outlet not found' });
    }

    res.status(200).json({ outlet });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Role
exports.updateOutlet = async (req, res, next) => {
  try {
    let id = req.params.id;

    // Validation
    let { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let outlet = await OutletModel.findOneAndUpdate({ _id: id }, value, {
      new: true
    });

    if (!outlet) {
      console.log('Outlet not found');
      return res.status(404).json({ message: 'Outlet not found' });
    }

    res.status(200).json({ outlet });
  } catch (error) {

    console.log(error);
    // Send Error Response
    res.status(500).json('Error updating table');
  }
};

// Delete Outlet
exports.deleteOutlet = async (req, res, next) => {
  try {
    let id = req.params.id;

    let outlet = await OutletModel.deleteOne({ _id: id });

    if (!outlet) {
      console.log('Outlet not found');
      return res.status(404).json({ message: 'Outlet not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};

// For Testing Populate
// Find Company 
exports.findCompanyByOutletId = async (req, res, next) => {
  try {
    // console.log(req.body._id)
    const outlet = await OutletModel.findById(req.body._id).populate('Company');
    if (!outlet) {
      console.log('Outlet not found');
      return res.status(404).json({ message: 'Outlet not found' });
    }
    const company = outlet.Company;
    // console.log(outlet._id);
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error });
  }
}


