// const { validatePurchaseIngredients, validateUpdate } = require('./purchaseIngredients.validator');
const { validatePurchaseIngredients, validateUpdate} = require('./purchase_Ingredients.validator');
const PurchaseIngredientsModel = require('./index');

// Insert New PurchaseIngredients
exports.insertPurchaseIngredients = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validatePurchaseIngredients(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert PurchaseIngredients
    const purchaseIngredientsModel = new PurchaseIngredientsModel(value);
    const savedData = await purchaseIngredientsModel.save();

    // Send Response
    res.status(200).json('Data inserted');
  } catch (error) {
    // Send Error Response
    res.status(500).json('Error inserting data into database');
  }
};



//Display Single PurchaseIngredients
exports.showPurchaseIngredients = async (req, res, next) => {
  try {
    let id = req.params.id;
    let purchaseIngredients = await PurchaseIngredientsModel.findOne({ _id: id });

    if (!purchaseIngredients) {
      console.log('PurchaseIngredients not found');
      return res.status(404).json({ message: 'PurchaseIngredients not found' });
    }

    res.status(200).json({ purchaseIngredients });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Display List
exports.showPurchaseIngredient = async (req, res, next) => {
  try {
    let purchaseIngredients = await PurchaseIngredientsModel.find();
    if (!purchaseIngredients || purchaseIngredients.length === 0) {
      console.log('PurchaseIngredients not found');
      return res.status(404).json({ message: 'PurchaseIngredients not found' });
    }
    res.status(200).json({ purchaseIngredients });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update PurchaseIngredients
exports.updatePurchaseIngredients = async (req, res, next) => {
  try {
    let id = req.params.id;

    // Validation
    let { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let purchaseIngredients = await PurchaseIngredientsModel.findOneAndUpdate({ _id: id }, value, {
      new: true
    });

    if (!purchaseIngredients) {
      console.log('PurchaseIngredients not found');
      return res.status(404).json({ message: 'PurchaseIngredients not found' });
    }

    res.status(200).json({ purchaseIngredients });
  } catch (error) {

    console.log(error);
    // Send Error Response
    res.status(500).json('Error updating purchaseIngredients');
  }
};

// // Delete PurchaseIngredients
exports.deletePurchaseIngredients = async (req, res, next) => {
  try {
    let id = req.params.id;

   let purchaseIngredients = await PurchaseIngredientsModel.deleteOne({ _id: id });

    if (!purchaseIngredients) {
      console.log('PurchaseIngredients not found');
      return res.status(404).json({ message: 'PurchaseIngredients not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
