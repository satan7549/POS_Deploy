let mongoose = require('mongoose');
// let { validateCompanies, validateUpdate } = require('./companies.validator');
let validateAccess = require('./access.validator');
let AccessModel = require('./access.model');
let access = require('./access.model');

//insert new table
exports.insertAccess = async (req,res,next) => {
  try {
      // Validation
  let { error, value } = validateAccess(req.body);

  // Check Error in Validation
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Insert table
  let accessModel = new AccessModel(value);
  let savedData = await accessModel.save();

  // Send Response
  res.status(200).json('Data inserted');
  } catch (error) {

    console.log(error);
     // Send Error Response
  res.status(500).json('Error inserting data into database'); 
  }
};