const Company = require("./Company");
const Outlet = require("../outlet/index");

// Create a new company
exports.createCompany = (req, res) => {
  const { name, cuisine } = req.body;

  const company = new Company({
    name,
    cuisine,
  });

  company
    .save()
    .then(() => {
      res.status(201).json({ message: "Company created successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to create company" });
    });
};

// Get all companys
exports.getCompanys = (req, res) => {
  Company.find()
    .then((companys) => {
      res.json(companys);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to retrieve companys" });
    });
};

// Get a specific company by ID
exports.getCompanyById = (req, res) => {
  const companyId = req.params.id;

  Company.findById(companyId)
    .then((company) => {
      if (!company) {
        return res.status(404).json({ error: "Company not found" });
      }

      res.json(company);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to retrieve company" });
    });
};

// Update a company
exports.updateCompany = (req, res) => {
  const companyId = req.params.id;
  const { name, cuisine } = req.body;

  Company.findByIdAndUpdate(companyId, { name, cuisine }, { new: true })
    .then((company) => {
      if (!company) {
        return res.status(404).json({ error: "Company not found" });
      }

      res.json(company);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update company" });
    });
};

// Delete a company
exports.deleteCompany = (req, res) => {
  const companyId = req.params.id;

  Company.findByIdAndDelete(companyId)
    .then((company) => {
      if (!company) {
        return res.status(404).json({ error: "Company not found" });
      }

      res.json({ message: "Company deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete company" });
    });
};

// Retrieve all outlets for a company
exports.getOutletsForCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;
  
    const company = await Company.findById(companyId).populate("outlets");

    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }

    const outlets = company.outlets;
    res.json(outlets);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve company outlets" });
  }
};
