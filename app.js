const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const indexRouter = require("./routes/index");
// user related route import
const userRouter = require("./api/Setting/user/user.route");

// Company area locations route import
const companyRouter = require("./api/Setting/Company/CompanyRoutes");
const outletRouter = require("./api/Setting/outlet/outlet.route");
const areaRouter = require("./api/Setting/area/area.route");
const tableRouter = require("./api/Setting/table/table.route"); // call and include the route

// Kitchen route import
const kitchenRoute = require("./api/Setting/kitchen/kitchen.route");

//Ingredient route import
const ingredientRouter = require("./api/Setting/ingredients/ingredient.route");
const ingredientCategoryRouter = require("./api/Setting/ingredientCategory/ingredientCategoryRoute");
const ingredientUnitRouter = require("./api/Setting/ingredientUnit/ingredientUnitRoute");

// food ,menu related route import
const foodCategory = require("./api/Setting/foodCategory/foodCategory.route");
const foodMenuRouter = require("./api/Setting/foodMenu/foodMenuRoute");
const FoodCombo = require("./api/Setting/foodCombos/foodCombo.Route");
const modifierRouter = require("./api/Setting/modifiers/modifier.route");

// Order related route
const orederRoutes = require("./api/Setting/order/orderRoute");

const kotRouter = require("./api/Setting/KOT/kot.router");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Base URL
app.use("/", indexRouter);

// User base route
app.use("/setting/user", userRouter);

// Company Base URL
app.use("/company", companyRouter);

// Outlet Base URL
app.use("/setting/outlet", outletRouter);

// Area Base URL
app.use("/setting/area", areaRouter);

//Table Base URL 
app.use("/setting/table", tableRouter);

// Ingredient Base URL
app.use("/setting/ingredient", ingredientRouter);

// Food Relate Base URL
app.use("/setting/foodcategory", foodCategory);
app.use("/setting/foodMenu", foodMenuRouter);
app.use("/setting/foodcombo", FoodCombo);

//oreder related routes
app.use("/setting/order", orederRoutes);
app.use("/setting/kot", kotRouter);

// moongoose Connection

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
