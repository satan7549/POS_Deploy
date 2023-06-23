let mongoose = require('mongoose');
// let { validateKitchenSales } = require('./kitchenSales.validator');
let { validateKitchenSales, validateUpdate } = require('./kitchenSales.validator');
let KitchenSalesModel = require('./index');
let kitchenSales = require('./index');

//insert new table
exports.kitchenSalesInsert = async (req,res,next) => {
    try {
        // Validation
    let { error, value } = validateKitchenSales(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    let kitchenSalesModel = new KitchenSalesModel(value);
    let savedData = await kitchenSalesModel.save();

    // Send Response
    res.status(200).json('Data inserted');
    } catch (error) {

      console.log(error);
       // Send Error Response
    res.status(500).json('Error inserting data into database'); 
    }
};

// Display List
exports.showKitchenSaless = async (req, res, next) => {
  try {
    let kitchenSales = await KitchenSalesModel.find();
    if (!kitchenSales || kitchenSales.length === 0) {
      console.log('KitchenSales not found');
      return res.status(404).json({ message: 'KitchenSales not found' });
    }
    res.status(200).json({ kitchenSales });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Display one single Detail
exports.showKitchenSales = async (req, res, next) => {
  try {
    let id = req.params.id;
    let kitchenSales = await KitchenSalesModel.findOne({ _id: id });

    if (!kitchenSales) {
      console.log('KitchenSales not found');
      return res.status(404).json({ message: 'KitchenSales not found' });
    }

    res.status(200).json({ kitchenSales });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update KitchenSales
exports.updateKitchenSales = async (req, res, next) => {
    try {
      let id = req.params.id;
  
      // Validation
      let { error, value } = validateUpdate(req.body);
  
      // Check Error in Validation
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      let kitchenSales = await KitchenSalesModel.findOneAndUpdate({ _id: id }, value, {
        new: true
      });
  
      if (!kitchenSales) {
        console.log('KitchenSales not found');
        return res.status(404).json({ message: 'KitchenSales not found' });
      }
  
      res.status(200).json({ kitchenSales });
    } catch (error) {
  
      console.log(error);
      // Send Error Response
      res.status(500).json('Error updating table');
    }
  };  
  
  // Delete KitchenSales
  exports.deleteKitchenSales = async (req, res, next) => {
    try {
      let id = req.params.id;
  
     let kitchenSales = await KitchenSalesModel.deleteOne({ _id: id });
  
      if (!kitchenSales) {
        console.log('KitchenSales not found');
        return res.status(404).json({ message: 'KitchenSales not found' });
      }
  
      res.status(200).json({ id });
    } catch (error) {
      // Send Error Response
      res.status(500).json({ error });
    }
  };