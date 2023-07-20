<<<<<<< HEAD
=======

>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
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
<<<<<<< HEAD
    // console.log(error);
    res.status(500).json({ error: 'Error inserting payment' });
=======

    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });

>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
  }
}; 


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
<<<<<<< HEAD
=======

>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
exports.getPaymentById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payment = await PaymentModel.findById({ _id: id });

    if (!payment) {
<<<<<<< HEAD
      return res.status(404).json({ message: 'Payment method not found' });
=======

      return res.status(404).json({ message: "Payment method not found" });

>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
    }

    res.status(200).json(payment);
  } catch (error) {
    res
      .status(500)
      .json({ emessage: "Something went wrong", error: error.message });
  }
};

<<<<<<< HEAD
// update payment
=======

// update payment

>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
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
<<<<<<< HEAD
      return res.status(404).json({ message: 'Payment method not found' });
=======

      return res.status(404).json({ message: "Payment method not found" });

>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
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
<<<<<<< HEAD
    }
    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
=======

    }
    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {

    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });

>>>>>>> d3ed7d6b7038cac2a62938c6d35e6d3ae0fc1d4a
  }
};
