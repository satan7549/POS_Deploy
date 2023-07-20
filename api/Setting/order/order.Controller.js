// Import necessary modules and models for the controller
const { validateOrder, validateUpdate } = require("./order.Validator");
const { validateKot } = require("../KOT/kot.validator");
const OrderModel = require("./index");
const KotModel = require("../KOT/index");

// Function to generate a new KOT number
const generateKOTNumber = async () => {
  // Get the current date
  const currentDate = new Date();

  // Find the last KOT (Kitchen Order Ticket) with "del_status: 'Live'" and sort by createdAt in descending order
  const lastKOT = await KotModel.findOne({ del_status: "Live" }).sort({
    createdAt: -1,
  });

  // If no KOT exists or the last KOT's date is different, start the count from 1
  if (!lastKOT || !isSameDate(currentDate, lastKOT.createdAt)) {
    return generateNewKOTNumber(currentDate, 1);
  }

  // Increment the count in the last KOT's number and return the new KOT number
  const lastKOTNumber = lastKOT.kot_number;
  if (!lastKOTNumber || typeof lastKOTNumber !== "string") {
    return generateNewKOTNumber(currentDate, 1);
  }
  const lastCount = parseInt(lastKOTNumber.slice(-3), 10);
  const newCount = lastCount + 1;

  return generateNewKOTNumber(currentDate, newCount);
};

// Function to generate a new KOT number based on the date and count
const generateNewKOTNumber = (date, count) => {
  const dateString = date.toISOString().slice(0, 10).replace(/-/g, "");
  const paddedCount = padLeft(count, 3);
  return dateString + paddedCount;
};

// Function to check if two dates have the same year, month, and day
const isSameDate = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

// Function to left pad a number with leading zeros to a specific length
const padLeft = (number, length) => {
  let str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
};

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
  try {
    // Destructure the required properties from the request body
    const {
      persons,
      waiter,
      table,
      items,
      customer_comment_for_all_food,
      total_order_price,
    } = req.body;

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
        orderExist: existingOrder,
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
      savedOrder.order_status = "Running";
      await savedOrder.save();

      // Send Response
      res
        .status(200)
        .json({ message: "success", order: savedOrder, kot: savedKot });
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
exports.showOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const order = await OrderModel.findOne({ _id: id });

    // If the order with the specified ID is not found, send a 404 response
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Send the found order in the response
    res.status(200).json({ message: "success", order });
  } catch (error) {
    // Send Error Response if any error occurs during the process
    res.status(500).json({ error });
  }
};

// Controller function to display a list of orders
exports.showOrders = async (req, res, next) => {
  try {
    const order = await OrderModel.find({ del_status: "Live" });

    // If no orders are found or the returned array is empty, send a 404 response
    if (!order || order.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    // Send the list of orders in the response
    res.status(200).json({ message: "success", order });
  } catch (error) {
    // Send Error Response if any error occurs during the process
    res.status(500).json({ error });
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
    res.status(500).json("Error updating order");
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
    res.status(500).json({ error: error.message });
  }
};
