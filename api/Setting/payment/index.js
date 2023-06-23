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
    user_id: { 
        type: Number, 
        required: true 
    },
    company_id: { 
        type: Number, 
        required: true 
    },
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
        default: 'Live' 
    }
  }
);

module.exports = mongoose.model('PaymentMethod', paymentMethodSchema);
