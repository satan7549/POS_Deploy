const { validateIngredientUnit, validateUpdate } = require("./ingredientUnitValidator");
const IngredientUnitModel = require("./index");

//nsert new IngredientUnit
exports.ingredientUnitInsert = async (req, res, next) => {
  try {
    // Validation
    let { error, value } = validateIngredientUnit(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    let ingredientUnitModel = new IngredientUnitModel(value);
    let savedData = await ingredientUnitModel.save();

    // Send Response
    res.status(200).json({ message: "success", ingredientUnit: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error inserting data into database");
  }
};

//Display Single IngredientUnit
exports.showIngredientUnit = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ingredientUnit = await IngredientUnitModel.findOne({ _id: id });

    if (!ingredientUnit) {
      return res.status(404).json({ message: "IngredientUnit not found" });
    }
    res.status(200).json({ message: "success", ingredientUnit });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Dispaly List
exports.showIngredientUnits = async (req, res, next) => {
  try {
    const ingredientUnit = await IngredientUnitModel.find({ del_status: "Live" });

    if (!ingredientUnit || ingredientUnit.length === 0) {
      return res.status(404).json({ message: "IngredientUnit not found" });
    }

    res.status(200).json({ message: "success", ingredientUnit });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Update IngredientUnit
exports.updateIngredientUnit = async (req, res, next) => {
  try {
    const id = req.params.id;

    //validation
    const { error, value } = validateUpdate(req.body);

    //check error in validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const ingredientUnit = await IngredientUnitModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });

    if (!ingredientUnit) {
      return res.status(404).json({ message: "IngredientUnit not found" });
    }

    res.status(200).json({ ingredientUnit });
  } catch (error) {
    //send error response
    res.status(500).json("Error Updating IngredientUnit");
  }
};

// Delete IngredientUnit
exports.deleteIngredientUnit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedIngredientUnit = await IngredientUnitModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );
    if (!updatedIngredientUnit) {
      return res.status(404).json({ message: "IngredientUnit not found." });
    }
    res.status(200).json({ message: "IngredientUnit deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
