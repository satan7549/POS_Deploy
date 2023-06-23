// const { validateSupplier, validateUpdate } = require('./purchase.validator');
const { validateTransfer, validateUpdate} = require('./transfer.validator');
const TransferModel = require('./index');

// Insert New Transfer
exports.insertTransfer = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateTransfer(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert Transfer
    const transferModel = new TransferModel(value);
    const savedData = await transferModel.save();

    // Send Response
    res.status(200).json('Data inserted');
  } catch (error) {
    // Send Error Response
    res.status(500).json('Error inserting data into database');
  }
};



// Display Single Transfer
exports.showTransfer = async (req, res, next) => {
  try {
    let id = req.params.id;
    let transfer = await TransferModel.findOne({ _id: id });

    if (!transfer) {
      console.log('Transfer not found');
      return res.status(404).json({ message: 'Transfer not found' });
    }

    res.status(200).json({ transfer });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showTransfers = async (req, res, next) => {
  try {
    let transfer = await TransferModel.find();
    if (!transfer || transfer.length === 0) {
      console.log('Transfer not found');
      return res.status(404).json({ message: 'Transfer not found' });
    }
    res.status(200).json({ transfer });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Transfer
exports.updateTransfer = async (req, res, next) => {
  try {
    let id = req.params.id;

    // Validation
    let { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let transfer = await TransferModel.findOneAndUpdate({ _id: id }, value, {
      new: true
    });

    if (!transfer) {
      console.log('Transfer not found');
      return res.status(404).json({ message: 'Transfer not found' });
    }

    res.status(200).json({ transfer });
  } catch (error) {

    console.log(error);
    // Send Error Response
    res.status(500).json('Error updating purchase');
  }
};

// // Delete Transfer
exports.deleteTransfer = async (req, res, next) => {
  try {
    let id = req.params.id;

   let transfer = await TransferModel.deleteOne({ _id: id });

    if (!transfer) {
      console.log('Transfer not found');
      return res.status(404).json({ message: 'Transfer not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
