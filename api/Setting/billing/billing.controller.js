const { validateBilling, validateUpdate } = require("./billing.validator");
const BillingModel = require("./index");

//insert new Billing
exports.billingInsert = async (req, res, next) => {
  try {
    // Validation
    const { error, value } = validateBilling(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const billingExists = await BillingModel.findOne({
      billing_name: value.billing_name,
    });

    if (billingExists) {
      // Send Response
      return res.status(409).json({ message: "Billing already exists!" });
    }

    // Insert billing
    const billing = new BillingModel(value);
    const savedData = await billing.save();

    // Send Response
    res.status(200).json({ message: "success", billing: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error inserting data into the database");
  }
};

// Display Single Billing
exports.showBilling = async (req, res, next) => {
  try {
    const id = req.params.id;
    const billing = await BillingModel.findOne({ _id: id });

    if (!billing) {
      return res.status(404).json({ message: "Billing not found" });
    }

    res.status(200).json({ message: "success", billing });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showAllBills = async (req, res, next) => {
  try {
    const billings = await BillingModel.find({ del_status: "Live" });
    if (!billings || billings.length === 0) {
      return res.status(404).json({ message: "billing not found" });
    }
    console.log(billings);

    res.status(200).json({ message: "success", billings });
  } catch (error) {
    res.status(500)
    .json({ error });
  }
};

// Update billing
exports.updateBilling = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const billing = await BillingModel.findOneAndUpdate(
      { _id: id },
      value,
      {
        new: true,
      }
    );

    if (!billing) {
      console.log("Billing not found");
      return res.status(404).json({ message: "Billing not found" });
    }

    res.status(200).json({ billing });
  } catch (error) {
    console.log(error);
    // Send Error Response
    res.status(500).json("Error updating Billing");
  }
};

//   // Delete billing
exports.deleteBilling = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBilling = await BillingModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );
    if (!updatedBilling) {
      return res.status(404).json({ message: "Billing not found." });
    }
    res.status(200).json({ message: "Billing deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
