const { validateKitchen } = require("./kitchen.validator");
const KitchenModel = require("./index");

// Insert new Kitchen
exports.kitchenInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateKitchen(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const kitchenExists = await KitchenModel.findOne({
      $or: [{ kitchen_name: value.kitchen_name }, { code: value.code }],
    });

    if (kitchenExists) {
      const existingFields = [];

      if (kitchenExists.kitchen_name === value.kitchen_name) {
        existingFields.push("kitchen_name");
      }

      if (kitchenExists.code === value.code) {
        existingFields.push("code");
      }

      return res.status(409).json({
        message: `Kitchen with the following field(s) already exists: ${existingFields.join(
          ", "
        )}`,
      });
    }

    // Insert kitchen
    const kitchenModel = new KitchenModel(value);
    const savedData = await kitchenModel.save();

    res.status(200).json({ message: "Success", kitchen: savedData });
  } catch (error) {
    res.status(500).json({
      message: "Error inserting data into the database",
      error: error.message,
    });
  }
};

// Display Single Kitchen
exports.showKitchen = async (req, res, next) => {
  try {
    const id = req.params.id;
    const kitchen = await KitchenModel.findById(id);

    if (!kitchen) {
      return res.status(404).json({ message: "Kitchen not found" });
    }

    res.status(200).json({ message: "Success", kitchen });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Display List
exports.showAllKitchens = async (req, res, next) => {
  try {
    const kitchens = await KitchenModel.find({ del_status: "Live" });

    if (!kitchens || kitchens.length === 0) {
      return res.status(404).json({ message: "No kitchens found" });
    }

    res.status(200).json({ message: "Success", kitchen: kitchens });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Update Kitchen
exports.updateKitchen = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateKitchen(req.body, true);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const kitchenExists = await KitchenModel.findOne({
      $and: [
        { _id: { $ne: id } },
        { $or: [{ kitchen_name: value.kitchen_name }, { code: value.code }] },
      ],
    });

    if (kitchenExists) {
      const existingFields = [];

      if (kitchenExists.kitchen_name === value.kitchen_name) {
        existingFields.push("kitchen_name");
      }

      if (kitchenExists.code === value.code) {
        existingFields.push("code");
      }

      return res
        .status(409)
        .json({
          message: `Kitchen with the following field(s) already exists: ${existingFields.join(
            ", "
          )}`,
        });
    }

    const kitchen = await KitchenModel.findByIdAndUpdate(id, value, {
      new: true,
    });

    if (!kitchen) {
      return res.status(404).json({ message: "Kitchen not found" });
    }

    res.status(200).json({ message: "Success", kitchen });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating kitchen", error: error.message });
  }
};

// Delete Kitchen
exports.deleteKitchen = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateKitchen = await KitchenModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );

    if (!updateKitchen) {
      return res.status(404).json({ message: "Kitchen not found" });
    }

    res.status(200).json({ message: "Kitchen deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
