// const { validateTransferIngredients, validateUpdate } = require('./transferIngredients.validator');
const { validateTransferIngredients,validateUpdate} = require('./transferIngredients.validator');
const TransferIngredientsModel = require('./index');

// Insert New TransferIngredients
exports.insertTransferIngredients = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateTransferIngredients(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert TransferIngredients
    const transferIngredientsModel = new TransferIngredientsModel(value);
    const savedData = await transferIngredientsModel.save();

    // Send Response
    res.status(200).json('Data inserted');
  } catch (error) {
    // Send Error Response
    res.status(500).json('Error inserting data into database');
  }
};



// Display Single TransferIngredients
exports.showTransferIngredients = async (req, res, next) => {
  try {
    let id = req.params.id;
    let transferIngredients = await TransferIngredientsModel.findOne({ _id: id });

    if (!transferIngredients) {
      console.log('TransferIngredients not found');
      return res.status(404).json({ message: 'TransferIngredients not found' });
    }

    res.status(200).json({ transferIngredients });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List TransferIngredients
exports.showTransferIngredient = async (req, res, next) => {
  try {
    let transferIngredients = await TransferIngredientsModel.find();
    if (!transferIngredients || transferIngredients.length === 0) {
      console.log('TransferIngredients not found');
      return res.status(404).json({ message: 'TransferIngredients not found' });
    }
    res.status(200).json({ transferIngredients });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update TransferIngredients
exports.updateTransferIngredients = async (req, res, next) => {
  try {
    let id = req.params.id;

    // Validation
    let { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let transferIngredients = await TransferIngredientsModel.findOneAndUpdate({ _id: id }, value, {
      new: true
    });

    if (!transferIngredients) {
      console.log('TransferIngredients not found');
      return res.status(404).json({ message: 'TransferIngredients not found' });
    }

    res.status(200).json({ transferIngredients });
  } catch (error) {

    console.log(error);
    // Send Error Response
    res.status(500).json('Error updating transferIngredients');
  }
};

// // Delete TransferIngredients
exports.deleteTransferIngredients = async (req, res, next) => {
  try {
    let id = req.params.id;

   let transferIngredients = await TransferIngredientsModel.deleteOne({ _id: id });

    if (!transferIngredients) {
      console.log('TransferIngredients not found');
      return res.status(404).json({ message: 'TransferIngredients not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
