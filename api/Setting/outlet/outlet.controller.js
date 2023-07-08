const OutletModel = require("./index");
const CompanyModel = require("../Company/Company");
const { validateOutlet, validateUpdate } = require("./outlet.validator");

// Insert new outlet
exports.outletInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateOutlet(req.body);

    const { company_id, outlet_name } = value;

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const outletExists = await OutletModel.findOne({
      outlet_name: outlet_name,
    });

    if (outletExists) {
      return res.status(409).json({ message: "Outlet already exists!" });
    }

    const company = await CompanyModel.findOne({ _id: company_id });

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    if (company.outlets.includes(value._id)) {
      return res.status(409).json({
        message: "Outlet ID is already present in the company's outlet ",
      });
    }

    const outlet = new OutletModel(value);
    const savedOutlet = await outlet.save();

    company.outlets.push(savedOutlet._id);
    await company.save();

    res.status(200).json({ message: "Outlet inserted", outlet: savedOutlet });
  } catch (error) {
    res.status(500).json(error.message);
    // res.status(500).json({
    //   message: "Error inserting data into the database",
    //   error: error.message,
    // });
  }
};

// Display list of outlets
exports.showAllOutlets = async (req, res, next) => {
  try {
    const outlets = await OutletModel.find({ del_status: "Live" });

    if (outlets.length === 0) {
      return res.status(404).json({ message: "Outlets not found" });
    }

    res.status(200).json({ message: "Success", outlets });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching outlets from the database",
      error: error.message,
    });
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

    res.status(200).json({ message: "Success", outlet });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching outlet details from the database",
      error: error.message,
    });
  }
};

// Update outlet
exports.updateOutlet = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { error, value } = validateUpdate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const outlet = await OutletModel.findByIdAndUpdate(id, value, {
      new: true,
    });

    if (!outlet) {
      return res.status(404).json({ message: "Outlet not found" });
    }

    res.status(200).json({ message: "Success", outlet });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating outlet", error: error.message });
  }
};

// Delete outlet
exports.deleteOutlet = async (req, res, next) => {
  try {
    const id = req.params.id;

    const outlet = await OutletModel.findById(id);

    if (!outlet) {
      return res.status(404).json({ message: "Outlet not found" });
    }

    const company = await CompanyModel.findOne({ _id: outlet.company_id });

    if (company) {
      company.outlets = company.outlets.filter(
        (outletId) => !outletId.equals(id)
      );
      await company.save();
    }

    outlet.del_status = "Deleted";
    await outlet.save();

    res.status(200).json({ message: "Outlet deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting outlet", error: error.message });
  }
};

// Find Company by Outlet ID
exports.findCompanyByOutletId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const outlet = await OutletModel.findById(id).populate("company_id");

    if (!outlet) {
      return res.status(404).json({ message: "Outlet not found" });
    }

    const company = outlet.company_id;

    res.status(200).json({ message: "Success", company });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching company details from the database",
      error: error.message,
    });
  }
};
