const { validateoutlet, validateUpdate } = require("./outlet.validator");
const CompanyModel = require("../Company/Company");
const OutletModel = require("./index");

//insert new table
exports.outletInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateoutlet(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    const OutletModel = new OutletModel(value);
    const savedData = await OutletModel.save();

    // Send Response
    res.status(200).json({ message: "success", savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ message: "Error inserting data into database" });
  }
};

// Display List
exports.showAllOutlets = async (req, res, next) => {
  try {
    const outlets = await OutletModel.find();
    if (!outlets || outlets.length === 0) {
      return res.status(404).json({ message: "Outlets not found" });
    }
    res.status(200).json({ outlets });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Display one single Detail
exports.showSingleOutlet = async (req, res, next) => {
  try {
    const id = req.params.id;
    const outlet = await OutletModel.findOne({ _id: id });

    if (!outlet) {
      return res.status(404).json({ message: "Outlet not found" });
    }

    res.status(200).json({ message: "success", outlet });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Role
exports.updateOutlet = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const outlet = await OutletModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });

    if (!outlet) {
      return res.status(404).json({ message: "Outlet not found" });
    }

    res.status(200).json({ message: "success", outlet });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ message: "Error updating table" });
  }
};

// Deconste outlet
exports.deleteOutlet = async (req, res, next) => {
  try {
    const id = req.params.id;

    const outlet = await OutletModel.deleteOne({ _id: id });

    if (!outlet) {
      return res.status(404).json({ message: "Outlet not found" });
    }

    res.status(200).json({ message: "Outlet deleted successfully" });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};

// For Testing Populate
// Find Company
exports.findCompanyByOutletId = async (req, res, next) => {
  try {
    // console.log(req.body._id)
    const outlet = await OutletModel.findById(req.body._id).populate("Company");
    if (!outlet) {
      return res.status(404).json({ message: "outlet not found" });
    }
    const company = outlet.Company;
    // console.log(outlet._id);
    res.status(200).json({ message: "success", company });
  } catch (error) {
    res.status(500).json({ error });
  }
};
