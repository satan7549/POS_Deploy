// const { validateRequisition, validateUpdate } = require('./requisition.validator');
const { validateRequisition,validateUpdate} = require('./requisition.validator');
const RequisitionModel = require('./index');

// Insert New Requisition
exports.insertRequisition = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateRequisition(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert Transfer
    const requisitionModel = new RequisitionModel(value);
    const savedData = await requisitionModel.save();

    // Send Response
    res.status(200).json('Data inserted');
  } catch (error) {
    // Send Error Response
    res.status(500).json('Error inserting data into database');
  }
};



// Display Single Requisition
exports.showRequisition = async (req, res, next) => {
  try {
    let id = req.params.id;
    let requisition = await RequisitionModel.findOne({ _id: id });

    if (!requisition) {
      console.log('Requisition not found');
      return res.status(404).json({ message: 'Requisition not found' });
    }

    res.status(200).json({ requisition });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showRequisitions = async (req, res, next) => {
  try {
    let requisition = await RequisitionModel.find();
    if (!requisition || requisition.length === 0) {
      console.log('Requisition not found');
      return res.status(404).json({ message: 'Requisition not found' });
    }
    res.status(200).json({ requisition });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// // Update Requisition
exports.updateRequisition = async (req, res, next) => {
  try {
    let id = req.params.id;

    // Validation
    let { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let requisition = await RequisitionModel.findOneAndUpdate({ _id: id }, value, {
      new: true
    });

    if (!requisition) {
      console.log('Requisition not found');
      return res.status(404).json({ message: 'Requisition not found' });
    }

    res.status(200).json({ requisition });
  } catch (error) {

    console.log(error);
    // Send Error Response
    res.status(500).json('Error updating requisition');
  }
};

// // Delete Transfer
exports.deleteRequisition = async (req, res, next) => {
  try {
    let id = req.params.id;

   let requisition = await RequisitionModel.deleteOne({ _id: id });

    if (!requisition) {
      console.log('Requisition not found');
      return res.status(404).json({ message: 'Requisition not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
