var createError = require("http-errors");
var express = require("express");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var settingAreaRouter = require("./api/Setting/area/area.route");
var settingTableRouter = require("./api/Setting/table/table.route"); // call and include the route
var settingUserRouter = require("./api/Setting/user/user.route");
var settingRoleRouter = require("./api/Setting/role/role.route");
var settingOutletRouter = require("./api/Setting/outlet/outlet.route");
var settingCompaniestRouter = require("./api/Setting/companies/companies.route");
var settingKitchenSalesRouter = require("./api/Setting/kitchenSales/kitchenSales.route");
var settingExpensesRouter = require("./api/Setting/expenses/expenses.route");
var settingPrinterRouter = require("./api/Setting/printer/printer.route");
var settingPaymentRouter = require("./api/Setting/payment/payment.route");
var settingCurrencyRouter = require("./api/Setting/currency/currency.route");
var settingAccessRouter = require("./api/Setting/access/access.route");
var settingAttendanceRouter = require("./api/Setting/attendance/attendance.route");
var Companyrouter = require("./api/Setting/Company/CompanyRoutes");

var app = express();

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

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/setting/area", settingAreaRouter);
app.use("/setting/table", settingTableRouter); // using of route or Registered the route
app.use("/setting/user", settingUserRouter);
app.use("/setting/role", settingRoleRouter);
app.use("/setting/outlet", settingOutletRouter);
app.use("/setting/companies", settingCompaniestRouter);
app.use("/setting/kitchenSales", settingKitchenSalesRouter);
app.use("/setting/expenses", settingExpensesRouter);
app.use("/setting/printer", settingPrinterRouter);
app.use("/setting/payment", settingPaymentRouter);
app.use("/setting/currency", settingCurrencyRouter);
app.use("/setting/access", settingAccessRouter);
app.use("/setting/attendance", settingAttendanceRouter);
app.use("/company", Companyrouter);

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
