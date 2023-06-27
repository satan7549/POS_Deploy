let { validateUser, validateUpdate } = require("./user.validator");
let UserModel = require("./index");
const companyModel = require("../Company/Company");
const cookieToken = require("../../../utils/cookieToken");
const CustomError = require("../../../utils/customError");

//insert new User
exports.userInsert = async (req, res, next) => {
  try {
    // Validation
    let { error, value } = validateUser(req.body);
    console.log("insertnew user", req.body);
    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const companyExists = await companyModel.findOne({ _id: value.company_id });

    if (!companyExists) {
      // Send Error Response
      return res.status(409).json("Company not Exists!");
    }

    const userExists = await UserModel.findOne({
      email_address: value.email_address,
    });

    if (userExists) {
      // Send Error Response
      return res.status(409).json("User already Exists!");
    }

    // Insert table
    let userModel = new UserModel(value);
    let savedData = await userModel.save();

    // Send Response
    cookieToken(savedData, res);
  } catch (error) {
    // Send Error Response
    res.status(500).json("Error inserting data into database");
  }
};

// Update User
exports.updateUser = async (req, res, next) => {
  try {
    let id = req.params.id;

    // Validation
    let { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let user = await UserModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    // Send Error Response
    res.status(500).json("Error updating table");
  }
};

// Display Single User
exports.showUser = async (req, res, next) => {
  try {
    let id = req.params.id;
    let user = await UserModel.findOne({ _id: id });

    if (!user) {
      console.log("user not found");
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Display List
exports.showUsers = async (req, res, next) => {
  try {
    let user = await UserModel.find();
    if (!user || user.length === 0) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Delete Table
exports.deleteUser = async (req, res, next) => {
  try {
    let id = req.params.id;

    let user = await UserModel.deleteOne({ _id: id });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};

//user Login
exports.login = async (req, res, next) => {
  const { email_address, password } = req.body;

  //check for presence of email and password
  if (!email_address || !password) {
    return next(new CustomError("Please provide email and password", 400));
  }

  const user = await UserModel.findOne({ email_address }).select("+password");

  if (!user) {
    return next(
      new CustomError("Email or Password does not match or exist", 400)
    );
  }

  const isPasswordCorrect = await user.isValidatedPassword(password);

  if (!isPasswordCorrect) {
    return next(
      new CustomError("Email or Password does not match or exist", 400)
    );
  }

  cookieToken(user, res);
};
