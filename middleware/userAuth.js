const CustomError = require("../utils/customError.js");
const catchAsyncError = require("./catchAsyncError.js");
const jwt = require("jsonwebtoken");

// const isLoggedIn = catchAsyncError(async (req, res, next) => {
//   console.log("login req headers", req.header("Authorization"));
//   const token =
//     req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");
//   if (!token) {
//     return next(new CustomError("login first", 401));
//   }
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);

//   req.user = await User.findOne({ _id: decoded.id });
//   next();
// });

// module.exports = isLoggedIn;


const {
  userModel
} = require("../api/Setting/user/index.js");
const {
  Permissions
} = require("../api/Setting/user/permissions.js");

//users middleware for auth
const isLoggedIn = async (req, res, next) => {
  const token =
    req.cookies.token || req.header("Authorization") ?.replace("Bearer ", "");

  if (!token) {
    // next();
    res.status(403).send("login first");
    // return next(new CustomError("login first", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await userModel.findOne({
    _id: decoded.id
  });
  next();
};

// const authorization = async (req, res, next) => {
//   try {
//     console.log(req.user.permissions, " ", Permissions.permissions.updateAdmin);
//     // Check if req.user exists and the user has the required permission
//     if (req ? .user ? .permissions.includes(Permissions ? .permissions ? .updateAdmin)) {
//       next();
//     } else {
//       res.status(401).json({
//         message: 'You are not authorized to access this resource'
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       message: 'An error occurred while checking the user role',
//       error: error.message
//     });
//   }
// };

const authorization = (requiredPermission) => async (req, res, next) => {
  try {
    console.log(req.user.permissions, " ", requiredPermission);

    // Check if req.user exists and the user has the required permission
    if (req ?.user ?.permissions.includes(requiredPermission)) {
      next();
    } else {
      res.status(401).json({
        message: 'You are not authorized to access this resource'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while checking the user role',
      error: error.message
    });
  }
};


module.exports = {
  isLoggedIn,
  authorization
};