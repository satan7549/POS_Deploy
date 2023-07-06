const mongoose = require('mongoose');

const  auditLogSchema = new mongoose.Schema({

  id: { type: Number, required: true },
  user_id: { type: Number, default: null },
  event_title: { type: String, default: null },
  date_time: { type: String, default: null },
  details: { type: String },
  date: { type: String, default: null },
  del_status: { type: String, default: 'Active' },
  outlet_id: { type: Number, default: null }
});

const AuditLog = mongoose.model('AuditLog', auditLogSchema);

module.exports = AuditLog;