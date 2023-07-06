const { validateFoodCombo, validateUpdate } = require("./foodCombo.Validator");
const FoodComboModel = require("./index");


//insert new FoodCombo
exports.foodComboInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateFoodCombo(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const foodComboExists = await FoodComboModel.findOne({
      name: value.name,
    });

    if (foodComboExists) {
      // Send Response
      return res.status(409).json({ message: "FoodCombo already exists!" });
    }

    // Insert foodMenu
    const foodCombo = new FoodComboModel(value);
    const savedData = await foodCombo.save();

    // Send Response
    res.status(200).json({ message: "success", foodCombo: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error inserting data into the database");
  }
};

// Display Single FoodCombo
exports.showFoodCombo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const foodCombo = await FoodComboModel.findOne({ _id: id });

    if (!foodCombo) {
      return res.status(404).json({ message: "FoodCombo not found" });
    }

    res.status(200).json({ message: "success", foodCombo });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display foodCombo List
exports.showAllFoodCombo = async (req, res, next) => {
  try {
    const foodCombo = await FoodComboModel.find({ del_status: "Live" });

    if (!foodCombo || foodCombo.length === 0) {
      return res.status(404).json({ message: "foodCombo not found" });
    }

    res.status(200).json({ message: "success", foodCombo });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update FoodCombo
exports.updateFoodCombo = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const foodCombo = await FoodComboModel.findOneAndUpdate(
      { _id: id },
      value,
      {
        new: true,
      }
    );

    if (!foodCombo) {
      return res.status(404).json({ message: "Foodcombo not found" });
    }

    res.status(200).json({ message: "success", foodCombo });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error updating Foodcombo");
  }
};

// Delete FoodCombo
exports.deleteFoodCombo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedFoodCombo = await FoodComboModel.findByIdAndUpdate(
      id,
      { del_status: "Deactivate" },
      { new: true }
    );
    if (!updatedFoodCombo) {
      return res.status(404).json({ message: "Foodcombo not found." });
    }
    res.status(200).json({ message: "Foodcombo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
