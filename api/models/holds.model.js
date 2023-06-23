const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const holdsSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      delivery_partner_id: {
        type: Number,
        default: 0,
        required: true
      },
      customer_id: {
        type: String,
        default: null
      },
      hold_no: {
        type: String,
        default: '000000',
        required: true
      },
      total_items: {
        type: Number,
        default: null
      },
      sub_total: {
        type: Number,
        default: null
      },
      paid_amount: {
        type: Number,
        default: null
      },
      due_amount: {
        type: Number,
        default: null
      },
      due_payment_date: {
        type: Date,
        default: null
      },
      disc: {
        type: String,
        default: null
      },
      disc_actual: {
        type: Number,
        default: null
      },
      vat: {
        type: Number,
        default: null
      },
      total_payable: {
        type: Number,
        default: null
      },
      payment_method_id: {
        type: Number,
        default: null
      },
      table_id: {
        type: Number,
        default: null
      },
      total_item_discount_amount: {
        type: Number,
        required: true
      },
      sub_total_with_discount: {
        type: Number,
        required: true
      },
      sub_total_discount_amount: {
        type: Number,
        required: true
      },
      total_discount_amount: {
        type: Number,
        required: true
      },
      charge_type: {
        type: String,
        default: null
      },
      delivery_charge: {
        type: String,
        default: null
      },
      delivery_charge_actual_charge: {
        type: Number,
        default: null
      },
      tips_amount: {
        type: String,
        default: null
      },
      tips_amount_actual_charge: {
        type: Number,
        default: null
      },
      sub_total_discount_value: {
        type: String,
        required: true
      },
      sub_total_discount_type: {
        type: String,
        required: true
      },
      token_no: {
        type: String,
        default: null
      },
      sale_date: {
        type: String,
        required: true
      },
      date_time: {
        type: Date,
        default: Date.now
      },
      sale_time: {
        type: String,
        required: true
      },
      user_id: {
        type: Number,
        default: null
      },
      waiter_id: {
        type: Number,
        default: 0
      },
      outlet_id: {
        type: Number,
        default: null
      },
      order_status: {
        type: Number,
        default: null,
        comment: '1=new order, 2=cancelled order, 3=invoiced order'
      },
      sale_vat_objects: {
        type: String,
        default: null
      },
      order_type: {
        type: Number,
        default: null,
        comment: '1=dine in, 2 = take away, 3 = delivery'
      },
      del_status: {
        type: String,
        default: 'Live'
      }
})

module.exports = mongoose.model("Holds", holdsSchema);