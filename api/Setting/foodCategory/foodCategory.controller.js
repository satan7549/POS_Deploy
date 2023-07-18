const {
  validateFoodCategory,
  validateUpdate,
} = require("./foodCategory.validator");
const FoodCategoryModel = require("./index");
// const OutletModel = require("../outlet/index");

//insert new FoodCategory
exports.foodCategoryInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateFoodCategory(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const foodCategoryExists = await FoodCategoryModel.findOne({
      name: value.name,
    });

    if (foodCategoryExists) {
      // Send Response
      return res.status(409).json({ message: "FoodCategory already exists!" });
    }

    // Insert foodCategory
    const foodCategory = new FoodCategoryModel(value);
    const savedData = await foodCategory.save();

    // Send Response
    res.status(200).json({ message: "success", foodCategory: savedData });
  } catch (error) {
    // Send Error Response
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Display Single FoodCategory
exports.showFoodCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const foodCategory = await FoodCategoryModel.findOne({ _id: id });

    if (!foodCategory) {
      return res.status(404).json({ message: "FoodCategory not found" });
    }

    res.status(200).json({ message: "success", foodCategory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Display List
exports.showFoodCategorys = async (req, res, next) => {
  try {
    const foodCategory = await FoodCategoryModel.find({ del_status: "Live" });

    if (!foodCategory || foodCategory.length === 0) {
      return res.status(404).json({ message: "foodCategory not found" });
    }

    res.status(200).json({ message: "success", foodCategory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Update FoodCategory
exports.updateFoodCategory = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const foodCategory = await FoodCategoryModel.findOneAndUpdate(
      { _id: id },
      value,
      {
        new: true,
      }
    );

    if (!foodCategory) {
      console.log("FoodCategory not found");
      return res.status(404).json({ message: "FoodCategory not found" });
    }

    res.status(200).json({ foodCategory });
  } catch (error) {
    console.log(error);
    // Send Error Response
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

//   // Delete FoodCategory
exports.deleteFoodCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedFoodCategory = await FoodCategoryModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );
    if (!updatedFoodCategory) {
      return res.status(404).json({ message: "FoodCategory not found." });
    }
    res.status(200).json({ message: "FoodCategory deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
