const CurrencyModel = require('./index');
const { validateCurrency, validateUpdate } = require('./currency.validation');
// Insert a new currency
exports.insertCurrency = async (req, res, next) => {
  try {

    const { error, value } = validateCurrency(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const currency = new CurrencyModel(value);
    const savedCurrency = await currency.save();

    res.status(200).json(savedCurrency);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error inserting currency' });
  }
};

// Get a list of currencies
exports.getCurrencies = async (req, res, next) => {
  try {
    const currencies = await CurrencyModel.find();

    if (!currencies) {
      return res.status(404).json({ message: 'currencies not found' });
    }

    res.status(200).json(currencies);
  } catch (error) {
    res.status(500).json({ error: 'Error getting currencies' });
  }
};

// Get a single currency by ID
exports.getCurrencyById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const currency = await CurrencyModel.findById(id);

    if (!currency) {
      return res.status(404).json({ message: 'Currency not found' });
    }

    res.status(200).json(currency);
  } catch (error) {
    res.status(500).json({ error: 'Error getting currency by ID' });
  }
};

// Update a currency by ID
exports.updateCurrency = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { error, value } = validateUpdate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const updatedCurrency = await CurrencyModel.findOneAndUpdate({ _id: id }, value, {
      new: true
    });

    if (!updatedCurrency) {
      return res.status(404).json({ message: 'Currency not found' });
    }

    res.status(200).json(updatedCurrency);
  } catch (error) {
    res.status(500).json({ error: 'Error updating currency' });
  }
};

// Delete a currency by ID
exports.deleteCurrency = async (req, res, next) => {
  try {
    const id = req.params.id;

    const deletedCurrency = await CurrencyModel.findByIdAndDelete(id);

    if (!deletedCurrency) {
      return res.status(404).json({ message: 'Currency not found' });
    }

    res.status(200).json({ id: deletedCurrency._id });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting currency' });
  }
};
