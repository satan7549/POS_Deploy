const PaymentModel = require("./index");

const {
  validatePayment,
  validateUpdatePayment,
} = require("./payment.validation");

//insert payment method
exports.insertPayment = async (req, res, next) => {
  try {
    const { error, value } = validatePayment(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const payment = new PaymentModel(value);
    const savedPayment = await payment.save();

    res.status(200).json(savedPayment);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: 'Error inserting payment' });
  }
}; 

//payment list
exports.getPayments = async (req, res, next) => {
  try {
    const payments = await PaymentModel.find();
    res.status(200).json(payments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// show single payment
exports.getPaymentById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payment = await PaymentModel.findById({ _id: id });

    if (!payment) {
      return res.status(404).json({ message: 'Payment method not found' });
    }

    res.status(200).json(payment);
  } catch (error) {
    res
      .status(500)
      .json({ emessage: "Something went wrong", error: error.message });
  }
};

// update payment
exports.updatePayment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { error, value } = validateUpdatePayment(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const payment = await PaymentModel.findByIdAndUpdate(
      { _id: id },
      value,
      { new: true }
    );

    if (!payment) {
      return res.status(404).json({ message: 'Payment method not found' });
    }

    res.status(200).json(payment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};


//delete payment
exports.deletePayment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payment = await PaymentModel.findByIdAndRemove(id);

    if (!payment) {
      return res.status(404).json({ message: "Payment method not found" });
    }
    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
