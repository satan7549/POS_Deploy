const mongoose = require('mongoose');
const { validatePrinter,validateUpdate} = require('./printer.validator');
const PrinterModel = require('./index');


//insert new Printer

exports.insertPrinter = async (req,res,next) => {
    try {
        // Validation
    let { error, value } = validatePrinter(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert Printer
    let printerModel = new PrinterModel(value);
    let savedData = await printerModel.save();

    // Send Response
    res.status(200).json('Data inserted');
    } catch (error) {

      console.log(error);
       // Send Error Response
    res.status(500).json('Error inserting data into database'); 
    }
};

// Display Single Printer
exports.showPrinters = async (req, res, next) => {
  try {
    let id = req.params.id;
    let printer = await printerModel.findOne({ _id: id });

    if (!printer) {
      console.log('Printer not found');
      return res.status(404).json({ message: 'Printer not found' });
    }

    res.status(200).json({ printer });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showPrinter = async (req, res, next) => {
  try {
    let printer = await PrinterModel.find();
    if (!printer || printer.length === 0) {
      console.log('Printer not found');
      return res.status(404).json({ message: 'Printer not found' });
    }
    res.status(200).json({ printer });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Printer
exports.updatePrinter = async (req, res, next) => {
  try {
    let id = req.params.id;

    // Validation
    let { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let printer = await PrinterModel.findOneAndUpdate({ _id: id }, value, {
      new: true
    });

    if (!printer) {
      console.log('Printer not found');
      return res.status(404).json({ message: 'Printer not found' });
    }

    res.status(200).json({ printer });
  } catch (error) {

    console.log(error);
    // Send Error Response
    res.status(500).json('Error updating printer');
  }
};

// Delete Printer
exports.deletePrinter = async (req, res, next) => {
  try {
    let id = req.params.id;

   let printer = await PrinterModel.deleteOne({ _id: id });

    if (!printer) {
      console.log('Printer not found');
      return res.status(404).json({ message: 'Printer not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
