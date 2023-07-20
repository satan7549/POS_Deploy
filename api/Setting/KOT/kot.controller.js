const KotModel = require("./index");
const { validateKot } = require("./kot.validator");

// Insert a new KOT
exports.insertKot = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateKot(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert KOT
    const kot = new KotModel(value);
    const savedKot = await kot.save();

    // Send Response
    res.status(200).json({ message: "KOT inserted", kot: savedKot });
  } catch (error) {
    // Send Error Response
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Display list of KOTs
exports.showAllKots = async (req, res, next) => {
  try {
    const kots = await KotModel.find({ del_status: "Live" });
    if (kots.length === 0) {
      return res.status(404).json({ message: "KOTs not found" });
    }
    res.status(200).json({ message: "success", kots });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Display details of a single KOT
exports.showSingleKot = async (req, res, next) => {
  try {
    const id = req.params.id;
    const kot = await KotModel.findOne({ _id: id });

    if (!kot) {
      return res.status(404).json({ message: "KOT not found" });
    }

    res.status(200).json({ message: "success", kot });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Update KOT
exports.updateKot = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateKot(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const kot = await KotModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });

    if (!kot) {
      return res.status(404).json({ message: "KOT not found" });
    }

    res.status(200).json({ message: "success", kot });
  } catch (error) {
    // Send Error Response
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Delete KOT
exports.deleteKot = async (req, res, next) => {
  try {
    const id = req.params.id;

    const kot = await KotModel.findById(id);

    if (!kot) {
      return res.status(404).json({ message: "KOT not found" });
    }

    // Update del_status to "Deleted"
    kot.del_status = "Deleted";
    await kot.save();

    res.status(200).json({ message: "KOT deleted successfully" });
  } catch (error) {
    // Send Error Response
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
