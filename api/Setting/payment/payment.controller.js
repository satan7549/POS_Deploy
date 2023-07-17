const PaymentModel = require('./index');

const {
  validatePayment,
  validateUpdatePayment
} = require('./payment.validation');

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

exports.getPayments = async (req, res, next) => {
  try {
    const payments = await PaymentModel.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Error getting payment methods' });
  }
};

exports.getPaymentById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payment = await PaymentModel.findById({ _id: id });

    if (!payment) {
      return res.status(404).json({ message: 'Payment method not found' });
    }

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Error getting payment method by ID' });
  }
};

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
    res.status(500).json({ error: 'Error updating payment method' });
  }
};

exports.deletePayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedPayment = await PaymentModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );
    if (!updatedPayment) {
      return res.status(404).json({ message: "Payment not found." });
    }
    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
