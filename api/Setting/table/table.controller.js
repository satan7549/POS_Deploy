const { validateTable, validateUpdate } = require("./table.validator");
const TableModel = require("./index");

//insert new table
exports.insertTable = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateTable(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    const tableModel = new TableModel(value);
    const savedData = await tableModel.save();

    // Send Response
    res.status(200).json({ message: "Table inserted", table: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ message: "Error inserting data into database" });
  }
};

// Display Single Table
exports.showTable = async (req, res, next) => {
  try {
    const id = req.params.id;
    const table = await TableModel.findOne({ _id: id });

    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }

    res.status(200).json({ message: "success", table });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showTables = async (req, res, next) => {
  try {
    const table = await TableModel.find({ del_status: "Live" });

    if (!table || table.length === 0) {
      return res.status(404).json({ message: "Table not found" });
    }

    res.status(200).json({ message: "success", table });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Table
exports.updateTable = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const table = await TableModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });

    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }

    res.status(200).json({ message: "Update success", table });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};

// Delete Table
exports.deleteTable = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedTable = await TableModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );

    if (!updatedTable) {
      return res.status(404).json({ message: "Table not found." });
    }

    res.status(200).json({ message: "Table deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
