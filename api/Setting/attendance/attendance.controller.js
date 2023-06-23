let mongoose = require('mongoose');
// let { validateAttendance, validateUpdate } = require('./attendance.validator');
let {validateAttendance} = require('./attendance.validator');
let AttendanceModel = require('./attendance.model');
let attendance = require('./attendance.model');

//insert new table
exports.insertAttendance = async (req,res,next) => {
    try {
        // Validation
        console.log(validateAttendance)
    let { error, value } = validateAttendance(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    let attendanceModel = new AttendanceModel(value);
    let savedData = await attendanceModel.save();

    // Send Response
    res.status(200).json('Data inserted');
    } catch (error) {

      console.log(error);
       // Send Error Response
    res.status(500).json('Error inserting data into database'); 
    }
};