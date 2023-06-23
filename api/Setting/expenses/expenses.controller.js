let mongoose = require('mongoose');
let { validateExpenses, validateUpdate } = require('./expenses.validator');
// let { validateExpenses } = require('./expenses.validator');
let ExpensesModel = require('./expenses.model');
let expenses = require('./expenses.model');


//insert new Expenses
exports.expensesInsert = async (req,res,next) => {
    try {
        // Validation
    let { error, value } = validateExpenses(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    let expensesModel = new ExpensesModel(value);
    let savedData = await expensesModel.save();

    // Send Response
    res.status(200).json('Data inserted');
    } catch (error) {

      console.log(error);
       // Send Error Response
    res.status(500).json('Error inserting data into database'); 
    }
};

  // Display Single Expenses
  exports.showExpenses = async (req, res, next) => {
    try {
      let id = req.params.id;
      let expenses = await ExpensesModel.findOne({ _id: id });
  
      if (!expenses) {
        console.log('Expenses not found');
        return res.status(404).json({ message: 'Expenses not found' });
      }
  
      res.status(200).json({ expenses });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  // Display List
exports.showExpensess = async (req, res, next) => {
    try {
      let expenses = await ExpensesModel.find();
      if (!expenses || expenses.length === 0) {
        console.log('Expenses not found');
        return res.status(404).json({ message: 'Expenses not found' });
      }
      res.status(200).json({ expenses });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  // Update Expenses
  exports.updateExpenses = async (req, res, next) => {
      try {
        let id = req.params.id;
    
        // Validation
        let { error, value } = validateUpdate(req.body);
    
        // Check Error in Validation
        if (error) {
          return res.status(400).send(error.details[0].message);
        }
    
        let expenses = await ExpensesModel.findOneAndUpdate({ _id: id }, value, {
          new: true
        });
    
        if (!expenses) {
          console.log('Expenses not found');
          return res.status(404).json({ message: 'Expenses not found' });
        }
    
        res.status(200).json({ expenses });
      } catch (error) {
    
        console.log(error);
        // Send Error Response
        res.status(500).json('Error updating table');
      }
    };

  // Delete Expenses
exports.deleteExpenses = async (req, res, next) => {
  try {
    let id = req.params.id;

   let expenses = await ExpensesModel.deleteOne({ _id: id });

    if (!expenses) {
      console.log('Expenses not found');
      return res.status(404).json({ message: 'Expenses not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};