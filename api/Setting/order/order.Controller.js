// Import necessary modules and models for the controller
const { validateOrder, validateUpdate } = require("./order.Validator");
const { validateKot } = require("../KOT/kot.validator");
const OrderModel = require("./index");
const KotModel = require("../KOT/index");
const TableModle = require("../table/index");
const generateKOTNumber = require("../KOT/uniqueKotNumber");

// Function to generate a new order
const generateOrder = async (orderObjectValue) => {
  const orderModel = new OrderModel(orderObjectValue);
  return await orderModel.save();
};

// Function to generate a new KOT
const generateKOT = async (kotObjectValue) => {
  const kot = new KotModel(kotObjectValue);
  return await kot.save();
};

// Function to validate the KOT object
const validateKOTObject = (kotObject) => {
  return validateKot(kotObject);
};

// Controller function to handle order insertion
exports.orderInsert = async (req, res, next) => {
  // Destructure the required properties from the request body
  const {
    persons,
    waiter,
    table,
    items,
    customer_comment_for_all_food,
    total_order_price,
  } = req.body;
  try {
    //find Table by id
    const Table = await TableModle.findOne({ _id: table });

    if (!Table) {
      return res.satats(404).json({ message: "Table is not found" });
    }

    // Validate the order object before proceeding
    const orderObject = {
      persons,
      waiter,
      table,
      total_order_price,
    };
    const orderObjectValidationResult = validateOrder(orderObject);

    // If validation fails, send a 400 response with the error message
    if (orderObjectValidationResult.error) {
      return res
        .status(400)
        .send(orderObjectValidationResult.error.details[0].message);
    }

    // Check if an order with the same status and table ID already exists
    const existingOrder = await OrderModel.findOne({
      table: orderObjectValidationResult.value.table,
      order_status: "Running",
    });

    if (existingOrder) {
      // Create only a new KOT and update the existing order

      // Prepare the KOT object with relevant details
      const kotObject = {
        kot_number: await generateKOTNumber(),
        waiter_name: existingOrder.waiter,
        table: existingOrder.table.toString(),
        order: existingOrder._id.toString(),
        items,
        customer_comment_for_all_food,
      };

      // Validate the KOT object before proceeding
      const kotObjectValidationResult = validateKOTObject(kotObject);

      // If validation fails, send a 400 response with the error message
      if (kotObjectValidationResult.error) {
        return res
          .status(400)
          .send(kotObjectValidationResult.error.details[0].message);
      }

      // Generate a new KOT and save it
      const savedKot = await generateKOT(kotObjectValidationResult.value);

      // Update the existing order with KOT information
      existingOrder.kot_print.push(savedKot._id);
      await existingOrder.save();

      // Send Response
      res.status(200).json({
        message: "success",
        newkot: savedKot,
      });
    } else {
      // Create a new order and KOT

      // Generate a new order and save it
      const savedOrder = await generateOrder(orderObjectValidationResult.value);

      // Prepare the KOT object with relevant details for the new order
      const kotObject = {
        kot_number: await generateKOTNumber(),
        waiter_name: waiter,
        table: table.toString(),
        order: savedOrder._id.toString(),
        items,
        customer_comment_for_all_food,
      };

      // Validate the KOT object before proceeding
      const kotObjectValidationResult = validateKOTObject(kotObject);

      // If validation fails, send a 400 response with the error message
      if (kotObjectValidationResult.error) {
        return res
          .status(400)
          .send(kotObjectValidationResult.error.details[0].message);
      }

      // Generate a new KOT and save it
      const savedKot = await generateKOT(kotObjectValidationResult.value);

      // Update the order with KOT information
      savedOrder.kot_print.push(savedKot._id);
      // Updateing the order status
      savedOrder.order_status = "Running";
      const updatedOrder = await savedOrder.save();

      //=======new changes for save order in table ========//
      // //find Table by id
      // order id insert in table
      Table.order = updatedOrder._id;
      await Table.save();

      // Send Response
      res.status(200).json({ message: "success", order: savedOrder });
    }
  } catch (error) {
    // Send Error Response if any error occurs during the process
    res.status(500).json({
      message: "Error inserting data into the database",
      error: error.message,
    });
  }
};

// Controller function to display a single order
exports.showOrderDetail = async (req, res, next) => {
  try {
    const id = req.params.id;
    const order = await OrderModel.findOne({ _id: id, del_status: "Live" });

    // If the order with the specified ID and del_status "Live" is not found, send a 404 response
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Send the found order in the response
    res.status(200).json({ message: "success", order });
  } catch (error) {
    // Send Error Response if any error occurs during the process
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Controller function to display a list of orders
exports.showOrders = async (req, res, next) => {
  try {
    const order = await OrderModel.find({ del_status: "Live" }).populate({
      path: "kot_print",
      match: { del_status: "Live" },
      model: "Kot",
      populate: {
        path: "items.food_item",
        match: { del_status: "Live" },
        model: "FoodMenu",
      }, // Replace "kot" with the name of the model that the `kot_print` field references
    });

    // If no orders are found or the returned array is empty, send a 404 response
    if (!order || order.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    // Send the list of orders in the response
    res.status(200).json({ message: "success", order });
  } catch (error) {
    // Send Error Response if any error occurs during the process
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Controller function to update an existing order
exports.updateOrder = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validate the update request body using the validateUpdate function
    const { error, value } = validateUpdate(req.body);

    // If validation fails, send a 400 response with the error message
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Find and update the order with the specified ID
    const order = await OrderModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });

    // If the order with the specified ID is not found, send a 404 response
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Send the updated order in the response
    res.status(200).json({ message: "success", order });
  } catch (error) {
    // Send Error Response if any error occurs during the process
    res
      .status(500)
      .json({ message: "Error updating order", error: error.message });
  }
};

//Controller function for getting running order from table id
exports.getOrderByTableId = async (req, res, next) => {
  try {
    const tableID = req.params.id;
    const orderExists = await OrderModel.findOne({
      table: tableID,
      del_status: "Live",
    });
    if (!orderExists) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "success", order: orderExists });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Somthing went wrong", error: error.message });
  }
};

// Controller function to delete an order
exports.deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Set the "del_status" field of the order to "Deleted"
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );

    // If the order with the specified ID is not found, send a 404 response
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Send a success message in the response
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    // Send Error Response if any error occurs during the process
    res
      .status(500)
      .json({ message: "Somthing went wrong", error: error.message });
  }
};
