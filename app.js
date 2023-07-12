const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const indexRouter = require("./routes/index");
//const usersRouter = require("./routes/users");
const settingAreaRouter = require("./api/Setting/area/area.route");
const settingTableRouter = require("./api/Setting/table/table.route"); // call and include the route
const settingUserRouter = require("./api/Setting/user/user.route");
//const settingRoleRouter = require("./api/Setting/role/role.route");
const settingOutletRouter = require("./api/Setting/outlet/outlet.route");
//const settingCompaniestRouter = require("./api/Setting/companies/companies.route");
//const settingKitchenSalesRouter = require("./api/Setting/kitchenSales/kitchenSales.route");
//const settingExpensesRouter = require("./api/Setting/expenses/expenses.route");
const settingIngredientRouter = require("./api/Setting/ingredients/ingredient.route");
//const settingRecipeRouter = require("./api/Setting/recipe/recipeRoute");
//const settingPrinterRouter = require("./api/Setting/printer/printer.route");
//const settingPaymentRouter = require("./api/Setting/payment/payment.route");
//const settingCurrencyRouter = require("./api/Setting/currency/currency.route");
//const settingAccessRouter = require("./api/Setting/access/access.route");
//const settingAttendanceRouter = require("./api/Setting/attendance/attendance.route");
const FoodCategory = require("./api/Setting/foodCategory/foodCategory.route");
const FoodMenurouter = require("./api/Setting/foodMenu/foodMenuRoute");
const FoodCombo = require("./api/Setting/foodCombos/foodCombo.Route");
const Companyrouter = require("./api/Setting/Company/CompanyRoutes");
const orederRoutes = require("./api/Setting/order/orderRoute");
const IngredientCategoryrouter = require("./api/Setting/ingredientCategory/ingredientCategoryRoute");
const IngredientUnitrouter = require("./api/Setting/ingredientUnit/ingredientUnitRoute");
const KitchenRoute = require("./api/Setting/kitchen/kitchen.route");

const Modifierrouter = require("./api/Setting/modifiers/modifier.route");
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
app.use("/setting/foodcombo", FoodCombo);
app.use("/setting/order", orederRoutes);
app.use("/setting/ingredientCategory", IngredientCategoryrouter);

app.use("/setting/ingredientUnit", IngredientUnitrouter);
app.use("/setting/kot", KOTrouter);

app.use("/setting/modifier", Modifierrouter);
app.use("/setting/kitchen", KitchenRoute);

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
