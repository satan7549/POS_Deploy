const {
  validateModifier,
  validateUpdate,
} = require("./modifier.validator");
const ModifierModel = require("./index");

//insert new Modifier
exports.modifierInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateModifier(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const modifierExists = await ModifierModel.findOne({
      name: value.name,
    });

    if (modifierExists) {
      // Send Response
      return res.status(409).json({ message: "Modifier already exists!" });
    }

    // Insert modifier
    const modifierModel = new ModifierModel(value);
    const savedData = await modifierModel.save();

    // Send Response
    res.status(200).json({ message: "success", modifier: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error inserting data into the database");
  }
};

// Display Single Modifier
exports.showModifier = async (req, res, next) => {
  try {
    const id = req.params.id;
    const modifier = await ModifierModel.findOne({ _id: id });

    if (!modifier) {
      return res.status(404).json({ message: "Modifier not found" });
    }

    res.status(200).json({ message: "success", modifier });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showModifiers = async (req, res, next) => {
  try {
    const modifier = await ModifierModel.find({ del_status: "Live" });

    if (!modifier || modifier.length === 0) {
      return res.status(404).json({ message: "modifier not found" });
    }

    res.status(200).json({ message: "success", modifier });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update Modifier
exports.updateModifier = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const modifier = await ModifierModel.findOneAndUpdate(
      { _id: id },
      value,
      {
        new: true,
      }
    );

    if (!modifier) {
      return res.status(404).json({ message: "Modifier not found" });
    }

    res.status(200).json({ message: "success", modifier });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error updating table");
  }
};

// Delete Modifier
exports.deleteModifier = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateModifier = await ModifierModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );
    if (!updateModifier) {
      return res.status(404).json({ message: "Modifier not found." });
    }
    res.status(200).json({ message: "Modifier deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
