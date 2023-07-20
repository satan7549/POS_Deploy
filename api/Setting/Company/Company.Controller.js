const CompanyModel = require("./index");

// Create a new company
exports.createCompany = async (req, res) => {
  const { name } = req.body;

  try {
    const companyExists = await CompanyModel.findOne({ name: name });

    if (companyExists) {
      return res.status(409).json({ message: "Company Already Exists!" });
    }

    const newCompany = new CompanyModel(req.body);
    const company = await newCompany.save();
    res.status(201).json({ message: "Company created successfully", company });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Get all companys
exports.getCompanys = async (req, res) => {
  try {
    const Company = await CompanyModel.find({ del_status: "Live" });

    if (!Company || Company.length === 0) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.status(200).json({ message: "success", Company });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Get a specific company by ID
exports.getCompanyById = async (req, res) => {
  try {
    const id = req.params.id;
    const Company = await CompanyModel.findById(id);

    if (!Company) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.status(200).json({ message: "success", Company });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Update a company
exports.updateCompany = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  try {
    const company = await CompanyModel.findOneAndUpdate(
      { _id: id },
      { name },
      {
        new: true,
      }
    );

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.status(200).json({ message: "success", company });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Delete a company
exports.deleteCompany = async (req, res) => {
  const id = req.params.id;
  try {
    const companyExists = await CompanyModel.findById(id);

    if (!companyExists) {
      return res.status(404).json({ error: "Company not found" });
    }

    //Update del_status to "Deactive"
    companyExists.del_status = "Deleted";
    await companyExists.save();

    res.json({ message: "Company deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Retrieve all outlets for a company
exports.getOutletsForCompany = async (req, res) => {
  // try {
  //   const id = req.params.companyId;

  //   console.log(id);
  //   const company = await CompanyModel.findById(id).populate("outlets");
  //   if (!company) {
  //     return res.status(404).json({ error: "Company not found" });
  //   }

  //   const outlets = company.outlets;
  //   res.status(200).json({ message: "success", outlets });
  // } catch (error) {
  //   res.status(500).json({ error: "Failed to retrieve company outlets" });
  // }

  try {
    const id = req.params.id;
    const company = await CompanyModel.findById(id)
      .populate({
        path: "outlets",
        match:{del_status:"Live"}
      })

    res.status(200).json({ message: "Success", company });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching company details from the database",
      error: error.message,
    });
  }
};
