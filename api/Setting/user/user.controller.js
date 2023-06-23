let mongoose = require('mongoose');
let { validateUser, validateUpdate } = require('./user.validator');
let UserModel = require('./index');
let user = require('./index');


//insert new User
exports.userInsert = async (req,res,next) => {
    try {
        // Validation
    let { error, value } = validateUser(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    let userModel = new UserModel(value);
    let savedData = await userModel.save();

    // Send Response
    res.status(200).json('Data inserted');
    } catch (error) {

      console.log(error);
       // Send Error Response
    res.status(500).json('Error inserting data into database'); 
    }
};


// Update User
exports.updateUser = async (req, res, next) => {
    try {
      let id = req.params.id;
  
      // Validation
      let { error, value } = validateUpdate(req.body);
  
      // Check Error in Validation
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      let user = await UserModel.findOneAndUpdate({ _id: id }, value, {
        new: true
      });
  
      if (!user) {
        console.log('User not found');
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ user });
    } catch (error) {
  
      console.log(error);
      // Send Error Response
      res.status(500).json('Error updating table');
    }
  };


  // Display Single User
  exports.showUser = async (req, res, next) => {
    try {
      let id = req.params.id;
      let user = await UserModel.findOne({ _id: id });
  
      if (!user) {
        console.log('user not found');
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  // Display List
exports.showUsers = async (req, res, next) => {
    try {
      let user = await UserModel.find();
      if (!user || user.length === 0) {
        console.log('User not found');
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  // Delete Table
exports.deleteUser = async (req, res, next) => {
  try {
    let id = req.params.id;

   let user = await UserModel.deleteOne({ _id: id });

    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};