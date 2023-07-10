const {
  validateIngredientCategory,
  validateUpdate,
} = require("./ingredientCategoryValidator");
const IngredientCategoryModel = require("./index");

//nsert new IngredientCategory
exports.ingredientCategoryInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateIngredientCategory(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    const ingredientCategoryModel = new IngredientCategoryModel(value);
    const savedData = await ingredientCategoryModel.save();

    // Send Response
    res.status(200).json({ message: "success", ingredientCategory: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error inserting data into database");
  }
};

//Display Single IngredientCategory
exports.showIngredientCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ingredientCategory = await IngredientCategoryModel.findOne({
      _id: id,
    });

    if (!ingredientCategory) {
      return res.status(404).json({ message: "IngredientCategory not found" });
    }
    res.status(200).json({ message: "success", ingredientCategory });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Dispaly List
exports.showIngredientCategorys = async (req, res, next) => {
  try {
    const ingredientCategory = await IngredientCategoryModel.find({
      del_status: "Live",
    });

    if (!ingredientCategory || ingredientCategory.length === 0) {
      return res.status(404).json({ message: "IngredientCategory not found" });
    }

    res.status(200).json({ message: "success", ingredientCategory });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Update IngredientCategory
exports.updateIngredientCategory = async (req, res, next) => {
  try {
    const id = req.params.id;

    //validation
    const { error, value } = validateUpdate(req.body);

    //check error in validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const ingredientCategory = await IngredientCategoryModel.findOneAndUpdate(
      { _id: id },
      value,
      {
        new: true,
      }
    );

    if (!ingredientCategory) {
      return res.status(404).json({ message: "IngredientCategory not found" });
    }

    res.status(200).json({ ingredientCategory });
  } catch (error) {
    //send error response
    res.status(500).json("Error Updating IngredientCategory");
  }
};

// Delete IngredientCategory
exports.deleteIngredientCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedIngredientCategory =
      await IngredientCategoryModel.findByIdAndUpdate(
        id,
        { del_status: "Deleted" },
        { new: true }
      );
    if (!updatedIngredientCategory) {
      return res.status(404).json({ message: "IngredientCategory not found." });
    }
    res
      .status(200)
      .json({ message: "IngredientCategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
