const { validateOutconst, validateUpdate } = require('./outconst.validator');
// const { validateOutconst } = require('./outconst.validator');
const CompanyModel = require("../Company/Company")
const OutconstModel = require('./index');

//insert new table
exports.outconstInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateOutconst(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    const outconstModel = new OutconstModel(value);
    const savedData = await outconstModel.save();

    // Send Response
    res.status(200).json('Data inserted');
  } catch (error) {
    // Send Error Response
    res.status(500).json('Error inserting data into database');
  }
};

// Display List
exports.showOutconsts = async (req, res, next) => {
  try {
    const outconst = await OutconstModel.find();
    if (!outconst || outconst.length === 0) {
      console.log('Outconst not found');
      return res.status(404).json({ message: 'Outconst not found' });
    }
    res.status(200).json({ outconst });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Display one single Detail
exports.showOutconst = async (req, res, next) => {
  try {
    const id = req.params.id;
    const outconst = await OutconstModel.findOne({ _id: id });

    if (!outconst) {
      console.log('Outconst not found');
      return res.status(404).json({ message: 'Outconst not found' });
    }

    res.status(200).json({ outconst });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Role
exports.updateOutconst = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const outconst = await OutconstModel.findOneAndUpdate({ _id: id }, value, {
      new: true
    });

    if (!outconst) {
      console.log('Outconst not found');
      return res.status(404).json({ message: 'Outconst not found' });
    }

    res.status(200).json({ outconst });
  } catch (error) {

    console.log(error);
    // Send Error Response
    res.status(500).json('Error updating table');
  }
};

// Deconste Outconst
exports.deconsteOutconst = async (req, res, next) => {
  try {
    const id = req.params.id;

    const outconst = await OutconstModel.deconsteOne({ _id: id });

    if (!outconst) {
      console.log('Outconst not found');
      return res.status(404).json({ message: 'Outconst not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};

// For Testing Populate
// Find Company 
exports.findCompanyByOutconstId = async (req, res, next) => {
  try {
    // console.log(req.body._id)
    const outconst = await OutconstModel.findById(req.body._id).populate('Company');
    if (!outconst) {
      console.log('Outconst not found');
      return res.status(404).json({ message: 'Outconst not found' });
    }
    const company = outconst.Company;
    // console.log(outconst._id);
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error });
  }
}


