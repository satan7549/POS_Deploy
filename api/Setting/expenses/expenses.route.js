let express = require('express');
let router = express.Router();

let expensesController = require('./expenses.controller');

// /* add */
// router.get('/new', areaController.addArea);

/* Insert */
router.post('/new',expensesController.expensesInsert);
  
/* show */
router.get('/show', expensesController.showExpensess);

// // /* edit */
router.get('/edit/:id', expensesController.showExpenses );

// /* update */
router.post('/update/:id', expensesController.updateExpenses );

// /* delete */
router.delete('/delete/:id', expensesController.deleteExpenses);


module.exports = router;