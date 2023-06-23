const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    // Array of outlet references
    outlets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Outlet'
    }]
});

// const Restaurant = mongoose.model('Company', CompanySchema);
module.exports = mongoose.model("Company", CompanySchema);