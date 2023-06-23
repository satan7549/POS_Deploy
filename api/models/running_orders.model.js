const mongoose = require('mongoose');

const runningOrderSchema = new Schema({
    
  id: { type: Number, required: true },
  order_content: { type: String, required: true },
  user_id: { type: Number, default: 0 },
  del_status: { type: String, default: 'Live' },
  sale_no: { type: String, default: null }
});

const RunningOrder = mongoose.model('RunningOrder', runningOrderSchema);

module.exports = RunningOrder;