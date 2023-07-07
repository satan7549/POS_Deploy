const { validateOutlet, validateUpdate } = require("./outlet.validator");
const OutletModel = require("./index");
const CompanyModel = require("../Company/Company");

// Insert new outlet
exports.outletInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateOutlet(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const outletExists = await OutletModel.findOne({
      outlet_name: value.outlet_name,
    });

    if (outletExists) {
      return res.status(409).json({ message: "Outlet already exists!" });
    }

    // Check if the outlet ID is already present in the company's outlet array
    const company = await CompanyModel.findOne({ _id: value.company_id });

    // Insert outlet
    const outlet = new OutletModel(value);
    const savedOutlet = await outlet.save();

    // Update company's outlet array with the new outlet ID
    company.outlets.push(savedOutlet._id);
    await company.save();

    // Send Response
    res.status(200).json({ message: "success", outlet: savedOutlet });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ message: "Error inserting data into database" });
  }
};

// Display list of outlets
exports.showAllOutlets = async (req, res, next) => {
  try {
    const outlets = await OutletModel.find({ del_status: "Live" });
    if (!outlets || outlets.length === 0) {
      return res.status(404).json({ message: "Outlets not found" });
    }
    res.status(200).json({ message: "success", outlets });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display details of a single outlet
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

// Update outlet
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
    res.status(500).json({ message: "Error updating outlet" });
  }
};

exports.deleteOutlet = async (req, res, next) => {
  try {
    const id = req.params.id;

    const outlet = await OutletModel.findById(id);

    if (!outlet) {
      return res.status(404).json({ message: "Outlet not found" });
    }

    // Find the company that contains the outlet ID
    const company = await CompanyModel.findOne({ _id: outlet.company_id });

    if (company) {
      // Remove the outlet ID from the company's outlets array
      company.outlets = company.outlets.filter(
        (outletId) => !outletId.equals(id)
      );
      await company.save();
    }

    // Set the del_status to "Deleted" for the outlet
    outlet.del_status = "Deleted";
    await outlet.save();

    res.status(200).json({ message: "Outlet deleted successfully" });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};


// Find Company
exports.findCompanyByOutletId = async (req, res, next) => {
  try {
    const outlet = await OutletModel.findById(req.body._id).populate("Company");
    if (!outlet) {
      return res.status(404).json({ message: "outlet not found" });
    }
    const company = outlet.Company;
    
    res.status(200).json({ message: "success", company });
  } catch (error) {
    res.status(500).json({ error });
  }
};
