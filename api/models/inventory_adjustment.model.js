const mongoose = require('mongoose');

const inventoryAdjustmentSchema = new mongoose.Schema({


  id: { type: Number, required: true },
  reference_no: { type: String, default: null },
  date: { type: Date, required: true },
  note: { type: String, default: null },
  employee_id: { type: Number, default: null },
  user_id: { type: Number, default: null },
  outlet_id: { type: Number, default: null },
  del_status: { type: String, default: 'Live' }
});


    

const InventoryAdjustment = mongoose.model('InventoryAdjustment', inventoryAdjustmentSchema);

module.exports = InventoryAdjustment;