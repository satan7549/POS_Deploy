const mongoose = require("mongoose");
const { validateFoodMenu, validateUpdate } = require("./foodMenuValidator");
const FoodMenuModel = require("./foodMenu.model");
const OutletModel = require("../outlet/index");

//insert new table
exports.foodMenuInsert = async (req, res) => {
  try {
    const { name, description, recipe, outlet, company } = req.body;

    // Validate the incoming data using Joi
    const { error } = validateFoodMenu(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Assuming the "recipe" field should be an array of valid ObjectIds
    const isValidRecipe = await Promise.all(
      recipe.map(async (id) => {
        const recipeExists = await RecipeModel.exists({ _id: id });
        return recipeExists;
      })
    );

    if (!isValidRecipe.every((exists) => exists)) {
      return res.status(400).json({ error: "Invalid recipe IDs provided" });
    }

    // const mappedOutlets = {};
    // console.log(price, name, outlet);

    // for (const key1 in outlet) {
    //   console.log(key1, outlet[key1]);
    //   foodM = await OutletModel.findOne({ _id: key1 });
    //   mappedOutlets[key1] = outlet[key1];

    //   if (!foodM) {
    //     res
    //       .status(500)
    //       .json({ success: false, message: "No food in the Menu List" });
    //   }
    // }
    // console.log(mappedOutlets);

    // const foodMenu = new FoodMenuModel({
    //   name,
    //   outlet: mappedOutlets,
    //   price: req.body.price,
    // });
    // await foodMenu.save();
    // //   res.json(recipe);
    res.status(200).json(foodMenu);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
