const { validateOrder, validateUpdate } = require("./order.Validator");
const { validateKot } = require("../KOT/kot.validator");
const OrderModel = require("./index");
const KotModel = require("../KOT/index");

exports.orderInsert = async (req, res, next) => {
  try {
    const {
      persons,
      waiter,
      kot_number,
      table,
      items,
      customer_comment_for_all_food,
      total_order_price,
    } = req.body;

    const orderObject = {
      persons,
      waiter,
      table,
      total_order_price,
    };

    // Validate order object
    const { error: orderObjectError, value: orderObjectValue } =
      validateOrder(orderObject);

    // Check for validation error
    if (orderObjectError) {
      return res.status(400).send(orderObjectError.details[0].message);
    }

    // Check if an order with the same status and table ID already exists
    const existingOrder = await OrderModel.findOne({
      table: orderObjectValue.table,
      order_status: "Running",
    });

    if (existingOrder) {
      console.log("====>", "existingOrder");
      // Order with the same status and table ID already exists
      // Create only a new KOT and update the existing order

      // Construct KOT object
      const kotObject = {
        kot_number,
        waiter_name: existingOrder.waiter,
        table: existingOrder.table.toString(),
        order: existingOrder._id.toString(),
        items,
        customer_comment_for_all_food,
      };

      console.log("Initial Phase kotObject, L-61");

      const { error: kotObjectError, value: kotObjectValue } =
        validateKot(kotObject);

      if (kotObjectError) {
        return res.status(400).send(kotObjectError.details[0].message);
      }

      console.log("===>", "Step3: kotObjectValue, L-70");

      //Check Kot is Unique or not
      const kouUnique = await KotModel.findOne({
        kot_number: kotObjectValue.kot_number,
      });

      if (kouUnique) {
        return res
          .status(409)
          .json({ message: "KOT Number should be Unique! L-74" });
      }

      // Create a new KOT
      const kot = new KotModel(kotObjectValue);
      const savedKot = await kot.save();

      console.log("===>", "Step 4: savedKot, L-76", "newKot:-", savedKot);

      // Update the existing order with KOT information
      existingOrder.kot_print.push(savedKot._id);
      await existingOrder.save();

      console.log("===>", "Step5: existingOrder, L-82", existingOrder);

      // Send Response
      res.status(200).json({
        message: "success",
        orderExist: existingOrder,
        newkot: savedKot,
      });
    } else {
      // Order with the same status and table ID does not exist
      // Create a new order and KOT
      console.log("===>", "Step6: Else_Case, L-91");
      // Insert order
      const orderModel = new OrderModel(orderObjectValue);
      const savedOrder = await orderModel.save();
      console.log(
        "===>",
        "Step7: Else_Case orderModel, L-95",
        "Saved order:-",
        savedOrder
      );
      // Construct KOT object
      const kotObject = {
        kot_number,
        waiter_name: savedOrder.waiter,
        table: savedOrder.table.toString(),
        order: savedOrder._id.toString(),
        items,
        customer_comment_for_all_food,
      };
      const { error: kotObjectError, value: kotObjectValue } =
        validateKot(kotObject);

      if (kotObjectError) {
        return res.status(400).send(kotObjectError.details[0].message);
      }
      console.log("===>", "Step8: Else_Case, kotObjectValue, L-113");

      //Check Kot is Unique or not
      const kouUnique = await KotModel.findOne({
        kot_number: kotObjectValue.kot_number,
      });

      if (kouUnique) {
        return res
          .status(409)
          .json({ message: "KOT Number should be Unique! Line:-133" });
      }

      // Create a new KOT
      const kot = new KotModel(kotObjectValue);
      const savedKot = await kot.save();

      console.log("===>", "Step9: savedKot, L-119");

      // Update the order with KOT information
      savedOrder.kot_print.push(savedKot._id);
      savedOrder.order_status = "Running";
      await savedOrder.save();

      console.log("===>", "Step10: savedOrder, L-126");

      // Send Response
      res
        .status(200)
        .json({ message: "success", order: savedOrder, kot: savedKot });
    }
  } catch (error) {
    // Send Error Response
    res.status(500).json({
      message: "Error inserting data into the database",
      error: error.message,
    });
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

    res.status(200).json({ message: "success", order });
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
      { del_status: "Deleted" },
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
