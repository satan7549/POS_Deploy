let mongoose = require('mongoose');
let { validateArea, validateUpdate } = require('./area.validator');
// let validateArea = require('./area.validator');
let AreaModel = require('./index');
let area = require('./index');

//insert new table
exports.insertArea = async (req,res,next) => {
    try {
        // Validation
    let { error, value } = validateArea(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    let areaModel = new AreaModel(value);
    let savedData = await areaModel.save();

    // Send Response
    res.status(200).json('Data inserted');
    } catch (error) {

      console.log(error);
       // Send Error Response
    res.status(500).json('Error inserting data into database'); 
    }
};

// Display List
exports.showAreas = async (req, res, next) => {
  try {
    let area = await AreaModel.find();
    if (!area || area.length === 0) {
      console.log('Area not found');
      return res.status(404).json({ message: 'Area not found' });
    }
    res.status(200).json({ area });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// //Display one single Detail
exports.editArea = async (req, res, next) => {
  try {
    let id = req.params.id;
    let area = await AreaModel.findOne({ _id: id });

    if (!area) {
      console.log('Area not found');
      return res.status(404).json({ message: 'Area not found' });
    }

    res.status(200).json({ area });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// // Update Role
exports.updateArea = async (req, res, next) => {
  try {
    let id = req.params.id;

    // Validation
    let { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let area = await AreaModel.findOneAndUpdate({ _id: id }, value, {
      new: true
    });

    if (!area) {
      console.log('Area not found');
      return res.status(404).json({ message: 'Area not found' });
    }

    res.status(200).json({ area });
  } catch (error) {

    console.log(error);
    // Send Error Response
    res.status(500).json('Error updating table');
  }
};   
  
//   // Delete Area
  exports.deleteArea = async (req, res, next) => {
    try {
      let id = req.params.id;
  
     let area = await AreaModel.deleteOne({ _id: id });
  
      if (!area) {
        console.log('Area not found');
        return res.status(404).json({ message: 'Area not found' });
      }
  
      res.status(200).json({ id });
    } catch (error) {
      // Send Error Response
      res.status(500).json({ error });
    }
  };