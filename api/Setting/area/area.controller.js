const { validateArea, validateUpdate } = require("./area.validator");
const AreaModel = require("./index");

//insert new table
exports.insertArea = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateArea(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    const areaModel = new AreaModel(value);
    const savedData = await areaModel.save();

    // Send Response
    res.status(200).json({ message: "Area inserted", area: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ message: "Error inserting data into database" });
  }
};

// Display List
exports.showAreas = async (req, res, next) => {
  try {
    const area = await AreaModel.find();
    if (!area || area.length === 0) {
      return res.status(404).json({ message: "Area not found" });
    }
    res.status(200).json({ message: "success", area });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// //Display one single Detail
exports.editArea = async (req, res, next) => {
  try {
    const id = req.params.id;
    const area = await AreaModel.findOne({ _id: id });

    if (!area) {
      return res.status(404).json({ message: "Area not found" });
    }

    res.status(200).json({ message: "success", area });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// // Update Role
exports.updateArea = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let area = await AreaModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });

    if (!area) {
      return res.status(404).json({ message: "Area not found" });
    }

    res.status(200).json({ message: "success", area });
  } catch (error) {
    console.log(error);
    // Send Error Response
    res.status(500).json("Error updating table");
  }
};

//   // Delete Area
exports.deleteArea = async (req, res, next) => {
  try {
    let id = req.params.id;

    let area = await AreaModel.deleteOne({ _id: id });

    if (!area) {
      console.log("Area not found");
      return res.status(404).json({ message: "Area not found" });
    }

    res.status(200).json({ message: "Area Deleted successfully" });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
