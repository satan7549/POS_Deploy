const CustomError = require("../utils/customError.js");
const catchAsyncError = require("./catchAsyncError.js");
const jwt = require("jsonwebtoken");

const isLoggedIn = catchAsyncError(async (req, res, next) => {
  console.log("login req headers", req.header("Authorization"));
  const token =
    req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return next(new CustomError("login first", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findOne({ _id: decoded.id });
  next();
});

module.exports = isLoggedIn;
