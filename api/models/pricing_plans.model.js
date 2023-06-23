const mongoose = require('mongoose');

const pricingPlanSchema = new Schema({
    
  id: { type: Number, required: true },
  plan_name: { type: String, default: null },
  payment_type: { type: String, default: null },
  link_for_paypal: { type: String, default: null },
  link_for_stripe: { type: String, default: null },
  monthly_cost: { type: Number, default: null },
  price_for_month2: { type: Number, default: null },
  number_of_maximum_users: { type: String, default: null },
  number_of_maximum_outlets: { type: String, default: null },
  number_of_maximum_invoices: { type: String, default: null },
  trail_days: { type: String, default: null },
  is_recommended: { type: String, default: 'No' },
  description: { type: String, default: null },
  price_interval: { type: String, default: 'monthly' },
  del_status: { type: String, default: 'Live' }
});

const PricingPlan = mongoose.model('PricingPlan', pricingPlanSchema);

module.exports = PricingPlan;