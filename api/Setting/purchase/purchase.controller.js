// const { validateSupplier, validateUpdate } = require('./purchase.validator');
const { validatePurchase, validateUpdate} = require('./purchase.validator');
const PurchaseModel = require('./index');

// Insert New Purchase
exports.insertPurchase = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validatePurchase(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert Purchase
    const purchaseModel = new PurchaseModel(value);
    const savedData = await purchaseModel.save();

    // Send Response
    res.status(200).json('Data inserted');
  } catch (error) {
    // Send Error Response
    res.status(500).json('Error inserting data into database');
  }
};



// Display Single Purchase
exports.showPurchase = async (req, res, next) => {
  try {
    let id = req.params.id;
    let purchase = await PurchaseModel.findOne({ _id: id });

    if (!purchase) {
      console.log('Purchase not found');
      return res.status(404).json({ message: 'Purchase not found' });
    }

    res.status(200).json({ purchase });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showPurchases = async (req, res, next) => {
  try {
    let purchase = await PurchaseModel.find();
    if (!purchase || purchase.length === 0) {
      console.log('Purchaser not found');
      return res.status(404).json({ message: 'Purchase not found' });
    }
    res.status(200).json({ purchase });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Purchase
exports.updatePurchase = async (req, res, next) => {
  try {
    let id = req.params.id;

    // Validation
    let { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let purchase = await PurchaseModel.findOneAndUpdate({ _id: id }, value, {
      new: true
    });

    if (!purchase) {
      console.log('Purchase not found');
      return res.status(404).json({ message: 'Purchase not found' });
    }

    res.status(200).json({ purchase });
  } catch (error) {

    console.log(error);
    // Send Error Response
    res.status(500).json('Error updating purchase');
  }
};

// // Delete Purchase
exports.deletePurchase = async (req, res, next) => {
  try {
    let id = req.params.id;

   let purchase = await PurchaseModel.deleteOne({ _id: id });

    if (!purchase) {
      console.log('Purchase not found');
      return res.status(404).json({ message: 'Purchase not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
