// const {
//   userModel
// } = require("./index");
// const {
//   Permissions
// } = require("./permissions");
// const jwt = require("jsonwebtoken");

// //users middleware for auth
// const isLoggedIn = async (req, res, next) => {
//   const token =
//     req.cookies.token || req.header("Authorization") ?.replace("Bearer ", "");

//   if (!token) {
//   // next();

//     res.status(403).send("login first");
//     // return next(new CustomError("login first", 401));
//   }
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);

//   req.user = await userModel.findOne({
//     _id: decoded.id
//   });
//   next();
// };

// const authorization = async (req, res, next) => {
//   try {
//     console.log(req.user.permissions, " ", Permissions.permissions.updateAdmin);
//     // Check if req.user exists and the user has the required permission
//     if (req ?.user ?.permissions.includes(Permissions ?.permissions ?.updateAdmin)) {
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




// module.exports = {
//   isLoggedIn,
//   authorization
// };