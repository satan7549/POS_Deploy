const { validatePreFoodMade, validateUpdate } = require("./preFoodMade.Validator");
const PreFoodMadeModel = require("./index");

//nsert new PreFoodMade
exports.preFoodMadeInsert = async (req, res, next) => {
  try {
    // Validation
    let { error, value } = validatePreFoodMade(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    let preFoodMadeModel = new PreFoodMadeModel(value);
    let savedData = await preFoodMadeModel.save();

    // Send Response
    res.status(200).json({ message: "success", preFoodMade: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error inserting data into database");
  }
};

//Display Single PreFoodMade
exports.showPreFoodMade = async (req, res, next) => {
  try {
    const id = req.params.id;
    const preFoodMade = await PreFoodMadeModel.findOne({ _id: id });

    if (!ordpreFoodMadeer) {
      return res.status(404).json({ message: "preFoodMade not found" });
    }
    res.status(200).json({ message: "success", preFoodMade });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Dispaly List
exports.showPreFoodMadesById = async (req, res, next) => {
  try {
    const preFoodMade = await PreFoodMadeModel.find({ del_status: "Live" });

    if (!preFoodMade || preFoodMade.length === 0) {
      return res.status(404).json({ message: "preFoodMade not found" });
    }

    res.status(200).json({ message: "success", preFoodMade });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Update PreFoodMade
exports.updatePreFoodMade = async (req, res, next) => {
  try {
    const id = req.params.id;

    //validation
    const { error, value } = validateUpdate(req.body);

    //check error in validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const preFoodMade = await PreFoodMadeModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });

    if (!preFoodMade) {
      return res.status(404).json({ message: "preFoodMade not found" });
    }

    res.status(200).json({ preFoodMade });
  } catch (error) {
    //send error response
    res.status(500).json("Error Updating PreFoodMade");
  }
};

// Delete PreFoodMade
exports.deletePreFoodMade = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedPreFoodMade = await PreFoodMadeModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );
    if (!updatedPreFoodMade) {
      return res.status(404).json({ message: "PreFoodMade not found." });
    }
    res.status(200).json({ message: "PreFoodMade deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
