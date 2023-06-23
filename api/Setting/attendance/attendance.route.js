let express = require('express');
let router = express.Router();

let attendanceController = require('./attendance.controller');

/* Insert */
router.post('/new', attendanceController.insertAttendance);
  
/* show */
// router.get('/show', areaController.showAreas );

/* edit */
// router.get('/edit/:id', areaController.editArea );

/* update */
// router.post('/update/:id', areaController.updateArea );

/* update */
// router.delete('/delete/:id', areaController.deleteArea);


module.exports = router;