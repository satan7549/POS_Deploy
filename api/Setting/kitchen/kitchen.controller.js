const mongoose = require('mongoose');
const { validateKitchen, validateUpdate} = require('./kitchen.validator');
const KitchenModel = require('./index');


//insert new Kitchen

exports.insertKitchen = async (req,res,next) => {
    try {
        // Validation
    let { error, value } = validateKitchen(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert Kitchen
    let kitchenModel = new KitchenModel(value);
    let savedData = await kitchenModel.save();

    // Send Response
    res.status(200).json('Data inserted');
    } catch (error) {

      console.log(error);
       // Send Error Response
    res.status(500).json('Error inserting data into database'); 
    }
};

// Display Single Kitchen
exports.showKitchens = async (req, res, next) => {
  try {
    let id = req.params.id;
    let kitchen = await KitchenModel.findOne({ _id: id });

    if (!kitchen) {
      console.log('Kitchen not found');
      return res.status(404).json({ message: 'Kitchen not found' });
    }

    res.status(200).json({ kitchen });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showKitchen = async (req, res, next) => {
  try {
    let kitchen = await KitchenModel.find();
    if (!kitchen || kitchen.length === 0) {
      console.log('Kitchen not found');
      return res.status(404).json({ message: 'Kitchen not found' });
    }
    res.status(200).json({ kitchen });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Kitchen
exports.updateKitchen = async (req, res, next) => {
  try {
    let id = req.params.id;

    // Validation
    let { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let kitchen = await KitchenModel.findOneAndUpdate({ _id: id }, value, {
      new: true
    });

    if (!kitchen) {
      console.log('Kitchen not found');
      return res.status(404).json({ message: 'Kitchen not found' });
    }

    res.status(200).json({ kitchen });
  } catch (error) {

    console.log(error);
    // Send Error Response
    res.status(500).json('Error updating kitchen');
  }
};

// Delete Table
exports.deleteKitchen = async (req, res, next) => {
  try {
    let id = req.params.id;

   let kitchen = await KitchenModel.deleteOne({ _id: id });

    if (!kitchen) {
      console.log('Kitchen not found');
      return res.status(404).json({ message: 'Kitchen not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
