const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companiesSchema = Schema({
  business_name: {
    type: String,
    default: null,
  },

  short_name: {
    type: String,
    required: true,
    default: "iR",
  },

  website: String,

  date_format: {
    type: String,
    default: null,
  },

  zone_name: {
    type: String,
    default: null,
  },

  currency: {
    type: String,
    default: null,
  },

  currency_position: {
    type: String,
    default: null,
  },

  precision: {
    type: String,
    default: null,
  },

  //     default_customer: {
  //         type: Number,
  //          default: 1 },

  //     default_waiter: Number,

  //     default_payment: Number,

  //     payment_settings: String,

  //     address: {
  //          type: String,
  //           default: null },

  //     phone: {
  //         type: String,
  //          default: null },

  //     invoice_footer: {
  //          type: String,
  //           default: null },

  //     print_format_invoice: {
  //          type: String,
  //           default: '80mm' },

  //     sms_setting_check: {
  //          type: String,
  //           default: null },

  //     invoice_logo: String,

  //     company_id: Number,

  //     collect_tax: {
  //         type: String,
  //          default: null },

  //     tax_title: {
  //          type: String,
  //           default: null },

  //     tax_registration_no: {
  //          type: String,
  //           default: null },

  //     tax_is_gst: {
  //         type: String,
  //          default: null },

  //     state_code: {
  //          type: String,
  //           default: null },

  //     tax_setting: String,

  //     tax_string: {
  //          type: String,
  //           default: null },

  //     outlet_qty: Number,

  //     sms_enable_status: Number,

  //     sms_details: String,

  //     custom_label: {
  //         type: String,
  //          default: null },

  //     custom_url: String,

  //     smtp_enable_status: Number,

  //     smtp_details: String,

  //     whatsapp_share_number: {
  //          type: String,
  //          default: null },

  //     language_manifesto: {
  //          type: String,
  //           default: null },

  //     white_label: String,

  //     company_id_xml: {
  //          type: String,
  //           default: null },

  //     tax_registration_number: {
  //          type: String,
  //           default: null },

  //     attendance_type: {
  //          type: Number,
  //           required: true,
  //            default: 2 },

  //     tax_accounting_basis: {
  //          type: String,
  //           default: null },

  //     created_date: {
  //         type: Date,
  //         default: Date.now },

  //     plan_id: Number,

  //     monthly_cost: Number,

  //     number_of_maximum_users: {
  //          type: String,
  //           default: null },

  //     number_of_maximum_outlets: {
  //          type: String,
  //           default: null },

  //     number_of_maximum_invoices: {
  //          type: String,
  //           default: null },

  //     access_day: {
  //         type: String,
  //          default: null },

  //     payment_clear: {
  //         type: String,
  //          default: 'No' },

  //     is_block_all_user: {
  //          type: String,
  //           default: 'No' },

  //     customer_reviewers: String,

  //     counter_details: String,

  //     social_link_details: String,

  //     email_settings: String,

  //     export_daily_sale: {
  //          type: String,
  //           default: null },

  //     printing_invoice: {
  //          type: String,
  //           default: 'web_browser' },

  //     receipt_printer_invoice: Number,

  //     printing_bill: {
  //          type: String,
  //           default: 'web_browser' },

  //     receipt_printer_bill: {
  //          type: String,
  //           default: null },

  //     print_format_bill: {
  //          type: String,
  //           default: '80mm' },

  //     printing_kot: {
  //          type: String,
  //           default: 'web_browser' },

  //     receipt_printer_kot: {
  //          type: String,
  //           default: null },

  //     print_format_kot: {
  //          type: String,
  //           default: '80mm' },

  //     print_server_url_invoice: {
  //          type: String,
  //           default: null },

  //     print_server_url_bill: {
  //          type: String,
  //           default: null },

  //     languge_manifesto: {
  //          type: String,
  //           default: null },

  //     print_server_url_kot: {
  //          type: String,
  //          default: null },

  //     service_type: {
  //          type: String,
  //           default: 'delivery' },

  //     service_amount: {
  //          type: String,
  //           default: null },

  //     delivery_type: {
  //          type: String,
  //          default: null },

  //     delivery_amount: {
  //          type: String,
  //           default: null },

  //     languagefcrt_manifesto: {
  //          type: String,
  //           default: null },

  //     active_code: {
  //         type: String,
  //         default: null },

  //     is_active: {
  //          type: Number,
  //           required: true,
  //            default: 1 },

  //     tax_type: {
  //          type: Number,
  //           required: true,
  //            default: 1 },

  //     decimals_separator: {
  //          type: String,
  //           default: '.' },

  //     thousands_separator: {
  //         type: String,
  //         default: '' },

  //     print_kot_when_placing_order: {
  //          type: String,
  //           required: true,
  //            default: 'No' },

  //     open_cash_drawer_when_printing_invoice: {
  //          type: String,
  //           default: 'No' },

  //     when_clicking_on_item_in_pos: {
  //          type: String,
  //           default: '2' },

  //           default_order_type: Number,

  //     default_order_type_delivery_p: Number,

  //     is_rounding_enable: Number,

  //     is_loyalty_enable: {
  //         type: String,
  //         required: true,
  //         default: 'Yes' },

  //     minimum_point_to_redeem: {
  //          type: Number,
  //           required: true,
  //            default: 0 },

  //     loyalty_rate: Number,

  //     del_status: {
  //          type: String,
  //           default: 'Live' },

  //     sos_enable_self_order: {
  //         type: String,
  //          required: true,
  //           default: 'No' },

  //     sos_enable_online_order: {
  //         type: String,
  //          required: true,
  //           default: 'No' },

  //     split_bill: {
  //         type: Number,
  //          required: true,
  //          default: 1 },

  //     place_order_tooltip: {
  //          type: String,
  //          required: true,
  //          default: 'show' },

  //     pre_or_post_payment: {
  //          type: Number,
  //          required: true,
  //           default: 1 },

  //     food_menu_tooltip: {
  //         type: String,
  //          required: true,
  //           default: 'show' },

  //     reservation_times: String,

  //     reservation_status: {
  //          type: String,
  //          required: true,
  //           default: 'enable' },

  //     price_interval: {
  //          type: String,
  //           default: null },

  //     sms_service_provider: {
  //          type: Number,
  //          required: true,
  //           default: 0 },

  //     sms_send_auto: {
  //          type: Number,
  //           required: true,
  //           default: 1 },

  //     saas_landing_page: {
  //          type: Number,
  //           required: true,
  //            default: 1 }
});

module.exports = mongoose.model("Companies", companiesSchema);
