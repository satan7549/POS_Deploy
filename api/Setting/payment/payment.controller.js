const PaymentMethodModel = require('./index');

const {
  validatePaymentMethod,
  validateUpdatePaymentMethod
} = require('./payment.validation');

exports.insertPaymentMethod = async (req, res, next) => {
  try {
    const { error, value } = validatePaymentMethod(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const paymentMethod = new PaymentMethodModel(value);
    const savedPaymentMethod = await paymentMethod.save();

    res.status(200).json(savedPaymentMethod);
  } catch (error) {
    res.status(500).json({ error: 'Error inserting payment method' });
  }
};

exports.getPaymentMethods = async (req, res, next) => {
  try {
    const paymentMethods = await PaymentMethodModel.find();
    res.status(200).json(paymentMethods);
  } catch (error) {
    res.status(500).json({ error: 'Error getting payment methods' });
  }
};

exports.getPaymentMethodById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const paymentMethod = await PaymentMethodModel.findById({ _id: id });

    if (!paymentMethod) {
      return res.status(404).json({ message: 'Payment method not found' });
    }

    res.status(200).json(paymentMethod);
  } catch (error) {
    res.status(500).json({ error: 'Error getting payment method by ID' });
  }
};

exports.updatePaymentMethod = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { error, value } = validateUpdatePaymentMethod(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const paymentMethod = await PaymentMethodModel.findByIdAndUpdate(
      { _id: id },
      value,
      { new: true }
    );

    if (!paymentMethod) {
      return res.status(404).json({ message: 'Payment method not found' });
    }

    res.status(200).json(paymentMethod);
  } catch (error) {
    res.status(500).json({ error: 'Error updating payment method' });
  }
};

exports.deletePaymentMethod = async (req, res, next) => {
  try {
    const id = req.params.id;
    const paymentMethod = await PaymentMethodModel.findByIdAndRemove(id);

    if (!paymentMethod) {
      return res.status(404).json({ message: 'Payment method not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting payment method' });
  }
};
