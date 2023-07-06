const mongoose = require('mongoose');

const runningOrderTableSchema = new Schema({
    
  id: { type: Number, required: true },
  table_content: { type: String, required: true },
  del_status: { type: String, default: 'Active' },
  sale_no: { type: String, default: null },
  table_id: { type: Number, default: 0 },
  outlet_id: { type: Number, default: 0 },
  persons: { type: Number, default: 0 }
});

const RunningOrderTable = mongoose.model('RunningOrderTable', runningOrderTableSchema);

module.exports = RunningOrderTable;