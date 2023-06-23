let mongoose = require("mongoose");

let Schema = mongoose.Schema;

const tableSchema = Schema({
    area: {
        type: Number,
        default: null
    },
    name: {
        type: String,
        maxlength: 50,
        default: null
    },
    sit_capacity: {
        type: String,
        maxlength: 50,
        default: null
    },
    position: {
        type: String,
        maxlength: 50,
        default: null
    },
    description: {
        type: String,
        maxlength: 100,
        default: null
    },
    user_id: {
        type: Number,
        default: null
    },
    outlet_id: {
        type: Number,
        default: null
    },
    company_id: {
        type: Number,
        default: null
    },
    del_status: {
        type: String,
        maxlength: 50,
        default: 'Live'
    }
});

module.exports = mongoose.model("Table", tableSchema);