let mongoose = require('mongoose');
let { validateTable, validateUpdate } = require('./table.validator');
let TableModel = require('./index');
let table = require('./index');

//insert new table

exports.insertTable = async (req,res,next) => {
    try {
        // Validation
    let { error, value } = validateTable(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    let tableModel = new TableModel(value);
    let savedData = await tableModel.save();

    // Send Response
    res.status(200).json('Data inserted');
    } catch (error) {

      console.log(error);
       // Send Error Response
    res.status(500).json('Error inserting data into database'); 
    }
};

// Display Single Table
exports.showTable = async (req, res, next) => {
  try {
    let id = req.params.id;
    let table = await TableModel.findOne({ _id: id });

    if (!table) {
      console.log('Table not found');
      return res.status(404).json({ message: 'Table not found' });
    }

    res.status(200).json({ area });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showTables = async (req, res, next) => {
  try {
    let table = await TableModel.find();
    if (!table || table.length === 0) {
      console.log('Table not found');
      return res.status(404).json({ message: 'Table not found' });
    }
    res.status(200).json({ table });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Table
exports.updateTable = async (req, res, next) => {
  try {
    let id = req.params.id;

    // Validation
    let { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let table = await TableModel.findOneAndUpdate({ _id: id }, value, {
      new: true
    });

    if (!table) {
      console.log('Table not found');
      return res.status(404).json({ message: 'Table not found' });
    }

    res.status(200).json({ table });
  } catch (error) {

    console.log(error);
    // Send Error Response
    res.status(500).json('Error updating table');
  }
};

// Delete Table
exports.deleteTable = async (req, res, next) => {
  try {
    let id = req.params.id;

   let table = await TableModel.deleteOne({ _id: id });

    if (!table) {
      console.log('Table not found');
      return res.status(404).json({ message: 'Table not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
