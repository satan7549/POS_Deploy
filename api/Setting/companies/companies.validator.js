let Joi = require('joi');

// Define the validation schema
let companiesSchema = Joi.object({
  business_name: Joi.string().max(50).allow(null),
  short_name: Joi.string().max(2).required().default('iR'),
  website: Joi.string().allow(null),
  date_format: Joi.string().max(50).allow(null),
  zone_name: Joi.string().max(50).allow(null),
  currency: Joi.string().max(50).allow(null),
  currency_position: Joi.string().max(100).allow(null),
  precision: Joi.string().max(10).allow(null)
  // default_customer: Joi.number().integer().default(1),
  // default_waiter: Joi.number().integer().allow(null),
  // default_payment: Joi.number().integer().allow(null),
  // payment_settings: Joi.string().allow(null),
  // address: Joi.string().max(100).allow(null),
  // phone: Joi.string().max(50).allow(null),
  // invoice_footer: Joi.string().max(500).allow(null),
  // print_format_invoice: Joi.string().max(500).default('80mm'),
  // sms_setting_check: Joi.string().max(20).allow(null),
  // invoice_logo: Joi.string().allow(null),
  // company_id: Joi.number().integer().allow(null),
  // collect_tax: Joi.string().max(50).allow(null),
  // tax_title: Joi.string().max(100).allow(null),
  // tax_registration_no: Joi.string().max(100).allow(null),
  // tax_is_gst: Joi.string().max(50).allow(null),
  // state_code: Joi.string().max(50).allow(null),
  // tax_setting: Joi.string().allow(null),
  // tax_string: Joi.string().max(250).allow(null),
  // outlet_qty: Joi.number().integer().allow(null),
  // sms_enable_status: Joi.number().integer().allow(null),
  // sms_details: Joi.string().allow(null),
  // custom_label: Joi.string().max(200).allow(null),
  // custom_url: Joi.string().allow(null),
  // smtp_enable_status: Joi.number().integer().allow(null),
  // smtp_details: Joi.string().allow(null),
  // whatsapp_share_number: Joi.string().max(20).allow(null),
  // language_manifesto: Joi.string().max(20).allow(null),
  // white_label: Joi.string().allow(null),
  // company_id_xml: Joi.string().max(250).allow(null),
  // tax_registration_number: Joi.string().max(250).allow(null),
  // attendance_type: Joi.number().integer().required().default(2),
  // tax_accounting_basis: Joi.string().max(250).allow(null),
  // created_date: Joi.date().iso().allow(null),
  // plan_id: Joi.number().integer().allow(null),
  // monthly_cost: Joi.number().allow(null),
  // number_of_maximum_users: Joi.string().max(10).allow(null),
  // number_of_maximum_outlets: Joi.string().max(10).allow(null),
  // number_of_maximum_invoices: Joi.string().max(10).allow(null),
  // access_day: Joi.string().max(10).allow(null),
  // payment_clear: Joi.string().max(20).default('No'),
  // is_block_all_user: Joi.string().max(10).default('No'),
  // customer_reviewers: Joi.string().allow(null),
  // counter_details: Joi.string().allow(null),
  // social_link_details: Joi.string().allow(null),
  // email_settings: Joi.string().allow(null),
  // export_daily_sale: Joi.string().max(20).allow(null),
  // printing_invoice: Joi.string().max(30).default('web_browser'),
  // receipt_printer_invoice: Joi.number().integer().allow(null),
  // printing_bill: Joi.string().max(100).default('web_browser'),
  // receipt_printer_bill: Joi.string().max(100).allow(null),
  // print_format_bill: Joi.string().max(100).default('80mm'),
  // printing_kot: Joi.string().max(100).default('web_browser'),
  // receipt_printer_kot: Joi.string().max(100).allow(null),
  // print_format_kot: Joi.string().max(100).default('80mm'),
  // print_server_url_invoice: Joi.string().max(100).allow(null),
  // print_server_url_bill: Joi.string().max(100).allow(null),
  // languge_manifesto: Joi.string().max(50).allow(null),
  // print_server_url_kot: Joi.string().max(100).allow(null),
  // service_type: Joi.string().max(20).default('delivery'),
  // service_amount: Joi.string().max(20).allow(null),
  // delivery_type: Joi.string().max(20).allow(null),
  // delivery_amount: Joi.string().max(20).allow(null),
  // languagefcrt_manifesto: Joi.string().max(50).allow(null),
  // active_code: Joi.string().max(20).allow(null),
  // is_active: Joi.number().integer().required().default(1),
  // tax_type: Joi.number().integer().required().default(1),
  // decimals_separator: Joi.string().max(20).default('.'),
  // thousands_separator: Joi.string().max(20).default(''),
  // print_kot_when_placing_order: Joi.string().max(5).required().default('No'),
  // open_cash_drawer_when_printing_invoice: Joi.string().max(5).default('No'),
  // when_clicking_on_item_in_pos: Joi.string().max(20).default('2'),
  // default_order_type: Joi.number().integer().allow(null),
  // default_order_type_delivery_p: Joi.number().integer().allow(null),
  // is_rounding_enable: Joi.number().integer().allow(null),
  // is_loyalty_enable: Joi.string().max(20).required().default('Yes'),
  // minimum_point_to_redeem: Joi.number().integer().required().default(0),
  // loyalty_rate: Joi.number().allow(null),
  // del_status: Joi.string().max(10).default('Live'),
  // sos_enable_self_order: Joi.string().max(20).required().default('No'),
  // sos_enable_online_order: Joi.string().max(20).required().default('No'),
  // split_bill: Joi.number().integer().required().default(1),
  // place_order_tooltip: Joi.string().max(20).required().default('show'),
  // pre_or_post_payment: Joi.number().integer().required().default(1),
  // food_menu_tooltip: Joi.string().max(20).required().default('show'),
  // reservation_times: Joi.string().allow(null),
  // reservation_status: Joi.string().max(20).required().default('enable'),
  // price_interval: Joi.string().max(20).allow(null),
  // sms_service_provider: Joi.number().integer().required().default(0),
  // sms_send_auto: Joi.number().integer().required().default(1),
  // saas_landing_page: Joi.number().integer().required().default(1)
}
);

const updateSchema = Joi.object({
  business_name: Joi.string().max(50).allow(null),
  short_name: Joi.string().max(2).required().default('iR'),
  website: Joi.string().allow(null),
  date_format: Joi.string().max(50).allow(null),
  zone_name: Joi.string().max(50).allow(null),
  currency: Joi.string().max(50).allow(null),
  currency_position: Joi.string().max(100).allow(null),
  precision: Joi.string().max(10).allow(null)
}); 

// Validate the table data
function validateCompanies(companiesData) {
    return companiesSchema.validate(companiesData);
  }

  function validateUpdate(updateData) {
    return updateSchema.validate(updateData);
  }

  module.exports = {
    validateCompanies,
    validateUpdate
  };
  