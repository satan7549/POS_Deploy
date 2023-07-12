const TaxModel = require("./index");

// Create a new taxes
exports.createTax = async (req, res) => {
  const { tax_name } = req.body;

  try {
    const taxExists = await TaxModel.findOne({ tax_name: tax_name });

    if (taxExists) {
      return res.status(409).json({ message: "Tax Already Exists!" });
    }

    const newTax = new TaxModel(req.body);
    const tax = await newTax.save();
    res.status(201).json({ message: "Tax created successfully", tax });
  } catch (error) {
    res.status(500).json({ error: "Failed to create Tax" });
  }
};

// Get all taxes
exports.getTaxes = async (req, res) => {
  try {
    const taxes = await TaxModel.find({}); // Fetch all taxes from the database

    if (taxes.length === 0) {
      return res.status(404).json({ message: "No taxes found" });
    }

    res.status(200).json({ message: "Success", taxes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific tax by ID
exports.getTaxById = async (req, res) => {
  try {
    const id = req.params.id;
    const tax = await TaxModel.findById(id);

    if (!tax) {
      return res.status(404).json({ message: "Tax not found" });
    }

    res.status(200).json({ message: "success", tax });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update a tax
exports.updateTax = async (req, res) => {
  const id = req.params.id;
  const { tax_name } = req.body;

  try {
    const tax = await TaxModel.findOneAndUpdate(
      { _id: id },
      { tax_name },
      {
        new: true,
      }
    );

    if (!tax) {
      return res.status(404).json({ message: "Tax not found" });
    }
    res.status(200).json({ message: "success", tax });
  } catch (error) {
    res.status(500).json({ error: "Failed to update tax" });
  }
};

// Delete a tax
exports.deleteTax = async (req, res) => {
  const id = req.params.id;
  try {
    const taxExists = await TaxModel.findById(id);

    if (!taxExists) {
      return res.status(404).json({ error: "Tax not found" });
    }

    //Update del_status to "Deactive"
    taxExists.del_status = "Deleted";
    await taxExists.save();

    res.json({ message: "Tax deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete tax" });
  }
};
