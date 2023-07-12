const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const indexRouter = require("./routes/index");
const settingAreaRouter=require("./api/Setting/area/area.route")


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
//app.use("/users", usersRouter);
app.use("/setting/area", settingAreaRouter);
app.use("/setting/table", settingTableRouter); // using of route or Registered the route
app.use("/setting/user", settingUserRouter);
//app.use("/setting/role", settingRoleRouter);
app.use("/setting/outlet", settingOutletRouter);
//app.use("/setting/companies", settingCompaniestRouter);
//app.use("/setting/kitchenSales", settingKitchenSalesRouter);
//app.use("/setting/expenses", settingExpensesRouter);
app.use("/setting/ingredient", settingIngredientRouter);
//app.use("/setting/recipe", settingRecipeRouter);
//app.use("/setting/printer", settingPrinterRouter);
//app.use("/setting/payment", settingPaymentRouter);
//app.use("/setting/currency", settingCurrencyRouter);
//app.use("/setting/access", settingAccessRouter);
//app.use("/setting/attendance", settingAttendanceRouter);
app.use("/setting/foodcategory", FoodCategory);
app.use("/setting/foodMenu", FoodMenurouter);
app.use("/setting/order", Orderrouter);

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
