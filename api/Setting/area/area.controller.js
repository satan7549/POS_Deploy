const { validateArea, validateUpdate } = require("./area.validator");
const AreaModel = require("./index");

// Insert new Area
exports.insertArea = async (req, res, next) => {
  try {
    // Validation
    const validatedData = validateArea(req.body);

    // Check area exists or not
    const areaExists = await AreaModel.findOne({ area_name: validatedData.area_name });

    if (areaExists) {
      return res.status(409).json({ message: "Area Already Exists!" });
    }

    // Insert Area
    const area = new AreaModel(validatedData);
    const savedArea = await area.save();

    // Send Response
    res.status(200).json({ message: "Area inserted", area: savedArea });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ message: "Error inserting data into database" });
  }
};

// Display List of Areas
exports.showAreas = async (req, res, next) => {
  try {
    const areas = await AreaModel.find({ del_status: "Live" });

    if (areas.length === 0) {
      return res.status(404).json({ message: "No Areas found" });
    }

    res.status(200).json({ message: "success", areas });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display a single Area by ID
exports.findAreaByID = async (req, res, next) => {
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

// Update Area
exports.updateArea = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const validatedData = validateUpdate(req.body);

    const area = await AreaModel.findOneAndUpdate({ _id: id }, validatedData, {
      new: true,
    });

    if (!area) {
      return res.status(404).json({ message: "Area not found" });
    }

    res.status(200).json({ message: "success", area });
  } catch (error) {
    console.log(error);
    // Send Error Response
    res.status(500).json({ message: "Error updating area" });
  }
};

// Delete Area
exports.deleteArea = async (req, res, next) => {
  try {
    const id = req.params.id;

    const area = await AreaModel.findOne({ _id: id });

    if (!area) {
      return res.status(404).json({ message: "Area not found" });
    }

    // Update del_status to "Deleted"
    area.del_status = "Deleted";
    await area.save();

    res.status(200).json({ message: "Area Deleted successfully" });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};
