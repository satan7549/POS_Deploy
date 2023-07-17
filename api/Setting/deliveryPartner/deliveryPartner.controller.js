const { validateDeliveryPartner, validateUpdate } = require("./deliveryPartner.validator");
const DeliveryPartnerModel = require("./index");

//insert new DeliveryPartner
exports.deliveryPartnerInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateDeliveryPartner(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const deliveryPartnerExists = await DeliveryPartnerModel.findOne({
      DeliveryPartner_name: value.DeliveryPartner_name,
    });

    if (deliveryPartnerExists) {
      // Send Response
      return res.status(409).json({ message: "DeliveryPartner already exists!" });
    }

    // Insert deliveryPartner
    const deliveryPartner = new DeliveryPartnerModel(value);
    const savedData = await deliveryPartner.save();

    // Send Response
    res.status(200).json({ message: "success", deliveryPartner: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error inserting data into the database");
  }
};

// Display Single DeliveryPartner
exports.showDeliveryPartnerById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deliveryPartner = await DeliveryPartnerModel.findOne({ _id: id });

    if (!deliveryPartner) {
      return res.status(404).json({ message: "DeliveryPartner not found" });
    }

    res.status(200).json({ message: "success", deliveryPartner });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showAllDeliveryPartners = async (req, res, next) => {
  try {
    const deliveryPartners = await DeliveryPartnerModel.find({ del_status: "Live" });
    if (!deliveryPartners || deliveryPartners.length === 0) {
      return res.status(404).json({ message: "DeliveryPartner not found" });
    }

    res.status(200).json({ message: "success", deliveryPartners });
  } catch (error) {
    res.status(500)
    .json({ error });
  }
};

// Update deliveryPartner
exports.updateDeliveryPartner = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const deliveryPartner = await DeliveryPartnerModel.findOneAndUpdate(
      { _id: id },
      value,
      {
        new: true,
      }
    );

    if (!deliveryPartner) {
      console.log("DeliveryPartner not found");
      return res.status(404).json({ message: "DeliveryPartner not found" });
    }

    res.status(200).json({ deliveryPartner });
  } catch (error) {
    console.log(error);
    // Send Error Response
    res.status(500).json("Error updating DeliveryPartner");
  }
};

//   // Delete deliveryPartner
exports.deleteDeliveryPartner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedDeliveryPartner = await DeliveryPartnerModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );
    if (!updatedDeliveryPartner) {
      return res.status(404).json({ message: "DeliveryPartner not found." });
    }
    res.status(200).json({ message: "DeliveryPartner deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
