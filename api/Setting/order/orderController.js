const mongoose = require("mongoose");
const { validateOrder, validateUpdate } = require("./orderValidator");
const OrderModel = require("./index");

//nsert new Order
exports.orderInsert = async (req, res, next) => {
  try {
    // Validation
    let { error, value } = validateOrder(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    let orderModel = new OrderModel(value);
    let savedData = await orderModel.save();

    // Send Response
    res.status(200).json({ message: "success", order: savedData });
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error inserting data into database");
  }
};

//Display Single Order
exports.showOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const order = await OrderModel.findOne({ _id: id });

    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }
    res.status(200).json({ message: "success", order });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Dispaly List
exports.showOrders = async (req, res, next) => {
  try {
    const order = await OrderModel.find({ del_status: "Live" });

    if (!order || order.length === 0) {
      return res.status(404).json({ message: "order not found" });
    }

    res.status(200).json({ message: "success", order });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Update Order
exports.updateOrder = async (req, res, next) => {
  try {
    const id = req.params.id;

    //validation
    const { error, value } = validateUpdate(req.body);

    //check error in validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const order = await OrderModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });

    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }

    res.status(200).json({ order });
  } catch (error) {
    //send error response
    res.status(500).json("Error Updating order");
  }
};

// Delete order
exports.deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      id,
      { del_status: "Deactivate" },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found." });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
