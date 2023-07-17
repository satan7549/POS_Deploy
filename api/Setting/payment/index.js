const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentMethodSchema = Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, "Please enter user_id"], },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: [true, "Please enter company_id"], },
    order_by: { 
        type: Number, 
        default: null 
    },
    personalinformation: { 
        type: String, 
        default: null 
    },
    del_status: { 
        type: String, 
        required: true, 
        default: 'Active' 
    }
  }
);

module.exports = mongoose.model('PaymentMethod', paymentMethodSchema);
