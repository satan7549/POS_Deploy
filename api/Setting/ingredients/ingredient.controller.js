const {validateIngredient,validateUpdate,} = require("./ingredient.validator");
const IngredientModel = require("./index");

//insert new Ingredient
exports.ingredientInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateIngredient(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const ingredientExists = await IngredientModel.findOne({
      name: value.name,
    });

    if (ingredientExists) {
      // Send Response
      return res.status(409).json({ message: "Ingredient already exists!" });
    }

    // Insert ingredient
    const ingredientModel = new IngredientModel(value);
    const savedData = await ingredientModel.save();

    // Send Response
    res.status(200).json({ message: "success", ingredient: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json({message:"Something went wrong",error:error.message});
  }
};

// Display Single Ingredient
exports.showIngredient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ingredient = await IngredientModel.findOne({ _id: id })
      .populate({ path: "category", match: { del_status: "Live" } })
      .populate({ path: "PurchaseUnit", match: { del_status: "Live" } })
      .populate({ path: "ConsumptionUnit", match: { del_status: "Live" } })
      .exec();

    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }

    res.status(200).json({ message: "success", ingredient });
  } catch (error) {
    res.status(500).json({ message:"Something went wrong",error:error.message });
  }
};

// Display List
exports.showingredients = async (req, res, next) => {
  try {
    const ingredient = await IngredientModel.find({ del_status: "Live" })
      .populate({ path: "category", match: { del_status: "Live" } })
      .populate({ path: "PurchaseUnit", match: { del_status: "Live" } })
      .populate({ path: "ConsumptionUnit", match: { del_status: "Live" } })
      .exec();

    if (!ingredient || ingredient.length === 0) {
      return res.status(404).json({ message: "ingredient not found" });
    }

    res.status(200).json({ message: "success", ingredient });
  } catch (error) {
    res.status(500).json({ message:"Something went wrong",error:error.message });
  }
};

// Update Ingredient
exports.updateIngredient = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const ingredient = await IngredientModel.findOneAndUpdate(
      { _id: id },
      value,
      {
        new: true,
      }
    );

    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }

    res.status(200).json({ message: "success", ingredient });
  } catch (error) {
    // Send Error Response
    res.status(500).json({message:"Something went wrong",error:error.message});
  }
};

// Delete Ingredient
exports.deleteIngredient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateIngredient = await IngredientModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );
    if (!updateIngredient) {
      return res.status(404).json({ message: "Ingredient not found." });
    }
    res.status(200).json({ message: "Ingredient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message:"Something went wrong",error:error.message });
  }
};
