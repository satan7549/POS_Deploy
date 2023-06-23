const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const salesSchema = Schema({
    // id: {
    //     type: Number,
    //     required: true
    //   },
      customer_id: {
        type: String,
        default: null
      },
      sale_no: {
        type: String,
        required: true,
        default: '000000'
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
      close_time: {
        type: String,
        required: true
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
      tips_amount: {
        type: String,
        default: null
      },
      tips_amount_actual_charge: {
        type: Number,
        default: null
      },
      delivery_charge_actual_charge: {
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
      sale_date: {
        type: String,
        required: true
      },
      date_time: {
        type: Date,
        required: true,
        default: Date.now
      },
      order_time: {
        type: String,
        required: true
      },
      cooking_start_time: {
        type: Date,
        default: null
      },
      cooking_done_time: {
        type: Date,
        default: null
      },
      modified: {
        type: String,
        required: true,
        enum: ['Yes', 'No'],
        default: 'No'
      },
      user_id: {
        type: Number,
        default: null
      },
      waiter_id: {
        type: Number,
        required: true,
        default: 0
      },
      outlet_id: {
        type: Number,
        default: null
      },
      company_id: {
        type: Number,
        default: null
      },
      order_status: {
        type: Number,
        required: true,
        enum: [1, 2, 3],
        comment: '1=new order, 2=invoiced order, 3=closed order'
      },
      order_type: {
        type: Number,
        required: true,
        enum: [1, 2, 3],
        comment: '1=dine in, 2 = take away, 3 = delivery'
      },
      del_status: {
        type: String,
        default: 'Live'
      },
      given_amount: {
        type: Number,
        default: null
      },
      change_amount: {
        type: Number,
        default: null
      },
      sale_vat_objects: {
        type: String,
        default: null
      },
      future_sale_status: {
        type: Number,
        required: true,
        default: 1
      },
      random_code: {
        type: String,
        default: null
      },
      is_kitchen_bell: {
        type: Number,
        default: 1
      },
      is_self_order: {
        type: Number,
        required: true,
        default: 0
      },
      self_order_ran_code: {
        type: String,
        default: null
      },
      self_order_status: {
        type: String,
        required: true,
        default: 'Pending'
      },
      del_address: {
        type: String,
        default: null
      },
      delivery_partner_id: {
        type: Number,
        default: null
      },
      rounding_amount_hidden: {
        type: Number,
        default: null
      },
      status: {
        type: String,
        required: true,
        default: 'Pending'
      },
      previous_due_tmp: {
        type: Number,
        default: null
      },
      used_loyalty_point: {
        type: Number,
        default: null
      },
      split_sale_id: {
        type: Number,
        default: null
      },
      orders_table_text: {
        type: String,
        default: null
      },
      refund_date_time: {
        type: Date,
        default: null
      },
      total_refund: {
        type: Number,
        default: null
      },
      refund_content: {
        type: String,
        default: null
      },
      token_number: {
        type: String,
        default: null
      }
})

module.exports = mongoose.model("Sales", salesSchema);