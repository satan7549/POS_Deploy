const { validateFoodMenu, validateUpdate } = require("./foodMenu.Validator");
const FoodMenuModel = require("./index");

//insert new FoodMenu
exports.foodMenuInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateFoodMenu(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const foodMenuExists = await FoodMenuModel.findOne({
      name: value.name,
    });

    if (foodMenuExists) {
      // Send Response
      return res.status(409).json({ message: "FoodMenu already exists!" });
    }

    // Insert foodMenu
    const foodMenu = new FoodMenuModel(value);
    const savedData = await foodMenu.save();

    // Send Response
    res.status(200).json({ message: "success", foodMenu: savedData });
  } catch (error) {
    // Send Error Response
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Display Single FoodMenu
exports.showFoodMenuById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const foodMenu = await FoodMenuModel.findById(id)
      .populate({
        path: "food_category",
        match:{del_status:"Live"}
      })
      .populate({
        path: "ingredients.ingredient",
        match:{del_status:"Live"}
      })
      .populate({
        path: "outlet",
        match:{del_status:"Live"}
      });

    if (!foodMenu) {
      return res.status(404).json({ message: "FoodMenu not found" });
    }

    res.status(200).json({ message: "success", foodMenu });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Display List
exports.showFoodMenus = async (req, res, next) => {
  try {
    const foodMenu = await FoodMenuModel.find({ del_status: "Live" })
    .populate({ path: "food_category", match:{del_status:"Live"} })
    .populate({ path: "ingredients.ingredient", match:{del_status:"Live"} })
    .populate({ path: "outlet", match:{del_status:"Live"} })
    .exec();

    if (!foodMenu || foodMenu.length === 0) {
      return res.status(404).json({ message: "foodMenu not found" });
    }

    res.status(200).json({ message: "success", foodMenu });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Somthing went wrong", eror: error.message });
  }
};

// Update FoodMenu
exports.updateFoodMenu = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const foodMenu = await FoodMenuModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });

    if (!foodMenu) {
      return res.status(404).json({ message: "FoodMenu not found" });
    }

    res.status(200).json({ message: "success", foodMenu });
  } catch (error) {
    // Send Error Response
    res
      .status(500)
      .json({ message: "Error updating foodMenu", error: error.message });
  }
};

// Delete FoodMenu
exports.deleteFoodMenu = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedFoodMenu = await FoodMenuModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );
    if (!updatedFoodMenu) {
      return res.status(404).json({ message: "FoodMenu not found." });
    }
    res.status(200).json({ message: "FoodMenu deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Somting went wrong !", error: error.message });
  }
};




