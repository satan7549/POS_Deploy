const Joi = require("joi");

const userSchema = Joi.object({
  full_name: Joi.string().max(25).required(),
  phone: Joi.string().max(50).required(),
  email_address: Joi.string().email().max(50).required(),
  password: Joi.string().max(50).required(),
  company_id: Joi.string().max(250).required(),
  designation: Joi.string().max(100).allow(null),
  will_login: Joi.string().valid("Yes", "No").default("No"),
  role: Joi.string().max(25).allow(null),
  outlet_id: Joi.number().integer().allow(null),
  outlets: Joi.string().max(100).allow(null),
  kitchens: Joi.string().max(250).allow(null),
  account_creation_date: Joi.string().max(100).allow(null),
  language: Joi.string().max(100).default("english"),
  last_login: Joi.string().max(100).allow(null),
  created_id: Joi.number().integer().allow(null),
  active_status: Joi.string().max(25).default("Active"),
  del_status: Joi.string().max(10).default("Live"),
  question: Joi.string().max(250).allow(null),
  answer: Joi.string().max(250).allow(null),
  login_pin: Joi.string().max(4).allow(null),
  order_receiving_id: Joi.number().integer().default(0),
  role_id: Joi.number().integer().allow(null),
});

const updateSchema = Joi.object({
  full_name: Joi.string().max(25).required(),
  phone: Joi.string().max(50).required(),
  email_address: Joi.string().email().max(50).required(),
  password: Joi.string().max(50).required(),
  designation: Joi.string().max(100).allow(null),
  will_login: Joi.string().valid("Yes", "No").default("No"),
  role: Joi.string().max(25).allow(null),
  outlet_id: Joi.number().integer().allow(null),
  outlets: Joi.string().max(100).allow(null),
  kitchens: Joi.string().max(250).allow(null),
  company_id: Joi.string().max(250).required(),
  account_creation_date: Joi.string().max(100).allow(null),
  language: Joi.string().max(100).default("english"),
  last_login: Joi.string().max(100).allow(null),
  created_id: Joi.number().integer().allow(null),
  active_status: Joi.string().max(25).default("Active"),
  del_status: Joi.string().max(10).default("Live"),
  question: Joi.string().max(250).allow(null),
  answer: Joi.string().max(250).allow(null),
  login_pin: Joi.string().max(4).allow(null),
  order_receiving_id: Joi.number().integer().default(0),
  role_id: Joi.number().integer().allow(null),
});

// Validate the area data
function validateUser(userData) {
  return userSchema.validate(userData);
}

function validateUpdate(updateData) {
  return updateSchema.validate(updateData);
}
module.exports = {
  validateUser,
  validateUpdate,
};

// module.exports = validateuser;
