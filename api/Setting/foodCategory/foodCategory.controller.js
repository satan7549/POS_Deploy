const FoodCategory = require("./index");

// CREATE - Create a new food category
const createFoodCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newFoodCategory = new FoodCategory({ name, description });
    const savedCategory = await newFoodCategory.save();
    res.status(201).json({ message: "success", foodCategory: savedCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Get all food categories
const getAllFoodCategories = async (req, res) => {
  try {
    const categories = await FoodCategory.find();
    res.status(200).json({ message: "success", foodCategory: categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Get a single food category by ID
const getFoodCategoryById = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await FoodCategory.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Food category not found." });
    }
    res.status(200).json({ message: "success", foodCategory: category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Update a food category by ID
const updateFoodCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, description } = req.body;
    const updatedCategory = await FoodCategory.findByIdAndUpdate(
      categoryId,
      { name, description },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Food category not found." });
    }
    res.status(200).json({ message: "success", updatedCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const FoodCategory = require("../models/foodCategory");

// DELETE - Soft delete a food category by ID
const softDeleteFoodCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const updatedCategory = await FoodCategory.findByIdAndUpdate(
      categoryId,
      { del_status: "deactivate" },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Food category not found." });
    }
    res.status(200).json({ message: "food category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// // DELETE - Delete from DATA_BASE a food category by ID
// const deleteFoodCategory = async (req, res) => {
//   try {
//     const { categoryId } = req.params;
//     const deletedCategory = await FoodCategory.findByIdAndDelete(categoryId);
//     if (!deletedCategory) {
//       return res.status(404).json({ message: "Food category not found." });
//     }
//     res.status(200).json({ message: "Food category deleted successfully." });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

module.exports = {
  createFoodCategory,
  getAllFoodCategories,
  getFoodCategoryById,
  updateFoodCategory,
  softDeleteFoodCategory,
};
