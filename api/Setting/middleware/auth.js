const errorhander = require("../utils/errorhander");
const catchAsyncError = require("./catchAsyncError")
const jwt = require("jsonwebtoken")
const Billing = require("../billing/index")

exports.isAuthenticatedBilling = catchAsyncError(async(req, res, next)=>{
    const { token } = req.cookies;

    if(!token){
        return next(new errorhander("Please Login First", 401));
    }

    const decodedData = jwt.verify(token, "SecreyKey");

    req.billing = await Billing.findById(decodedData.id)

    next()
})