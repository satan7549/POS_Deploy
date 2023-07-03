const mongoose = require("mongoose");
const { validateFoodMenu, validateUpdate } = require("./foodMenuValidator");
const FoodMenuModel = require("./index");
// const OutletModel = require("../outlet/index");

// //insert new table
// exports.foodMenuInsert = async (req, res) => {
//   try {
//     const { name, description, recipe, outlet, company } = req.body;

//     // Validate the incoming data using Joi
//     const { error } = validateFoodMenu(req.body);
//     if (error) {
//       return res.status(400).json({ error: error.details[0].message });
//     }

//     // Assuming the "recipe" field should be an array of valid ObjectIds
//     const isValidRecipe = await Promise.all(
//       recipe.map(async (id) => {
//         const recipeExists = await RecipeModel.exists({ _id: id });
//         return recipeExists;
//       })
//     );

//     if (!isValidRecipe.every((exists) => exists)) {
//       return res.status(400).json({ error: "Invalid recipe IDs provided" });
//     }

//     // const mappedOutlets = {};
//     // console.log(price, name, outlet);

//     // for (const key1 in outlet) {
//     //   console.log(key1, outlet[key1]);
//     //   foodM = await OutletModel.findOne({ _id: key1 });
//     //   mappedOutlets[key1] = outlet[key1];

//     //   if (!foodM) {
//     //     res
//     //       .status(500)
//     //       .json({ success: false, message: "No food in the Menu List" });
//     //   }
//     // }
//     // console.log(mappedOutlets);

//     // const foodMenu = new FoodMenuModel({
//     //   name,
//     //   outlet: mappedOutlets,
//     //   price: req.body.price,
//     // });
//     // await foodMenu.save();
//     // //   res.json(recipe);
//     res.status(200).json(foodMenu);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };



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
    res.status(500).json("Error inserting data into the database");
  }
};

// Display Single FoodMenu
exports.showFoodMenu = async (req, res, next) => {
  try {
    const id = req.params.id;
    const foodMenu = await FoodMenuModel.findOne({ _id: id });

    if (!foodMenu) {
      return res.status(404).json({ message: "FoodMenu not found" });
    }

    res.status(200).json({ message: "success", foodMenu });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showFoodMenus = async (req, res, next) => {
  try {
    const foodMenu = await FoodMenuModel.find();

    if (!foodMenu || foodMenu.length === 0) {
      return res.status(404).json({ message: "foodMenu not found" });
    }

    res.status(200).json({ message: "success", foodMenu });
  } catch (error) {
    res.status(500).json({ error });
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

    const foodMenu = await FoodMenuModel.findOneAndUpdate(
      { _id: id },
      value,
      {
        new: true,
      }
    );

    if (!foodMenu) {
      console.log("FoodMenu not found");
      return res.status(404).json({ message: "FoodMenu not found" });
    }

    res.status(200).json({ foodMenu });
  } catch (error) {
    console.log(error);
    // Send Error Response
    res.status(500).json("Error updating foodMenu");
  }
};

//   // Delete FoodMenu
exports.deleteFoodMenu = async (req, res, next) => {
  try {
    let id = req.params.id;

    let foodMenu = await FoodMenuModel.findByIdDelete({ _id: id });

    if (!foodMenu) {
      return res.status(404).json({ message: "FoodMenu not found" });
    }

    // res.status(200).json({ id });
    res.status(200).json({ message: "FoodMenu Deleted sucessfully" });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
