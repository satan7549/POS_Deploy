let mongoose = require("mongoose");
// const jwt = require("jsonwebtoken")
let billing = require("./index");
const nodemailer = require("nodemailer");
const ErrorHander = require("../utils/errorhander");
// const catchAsyncError = require("../middleware/catchAsyncError")
// const sendToken = require("../utils/jwtToken");
// const { sendMail  } = require("../utils/sendEmail");
// const crypto = require("crypto")
const { google } = require("googleapis");
let { validateBilling } = require("./billing.validator");
// let BillingModel = require('./index');

const CLIENT_ID =
  "983972594472-cgl7t5ag7lnbp96eb7pffhevhs1jgu35.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04cgiBwYTO7F7CgYIARAAGAQSNwF-L9IrgVu67HfoHrSUP3wu_gim4m6gCOWYnrmWOHTDpYyEy_8fKpBTqsX1WLWt498HXxI1zVk";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Function to send registration success email
async function sendMail(options) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "survesh.pandit@furation.tech",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "Suru <survesh.pandit@furation.tech>",
      to: options.email_address,
      subject: options.subject,
      text: options.message,
    };
    const result = await transporter.sendMail(mailOptions);

    return result;
  } catch (error) {
    throw error;
  }
}

// Insert new Billing
exports.billingInsert = async (req, res, next) => {
  try {
    const {
      billing_name,
      userID,
      email_address,
      billingDate,
      totalAmount,
      paymentMethod,
      transactionStatus,
    } = req.body;

    // Validate user data
    const { error } = validateBilling(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Check if billing already exists
    const existingBilling = await billing.findOne({ billing_name });
    if (existingBilling) {
      return res.status(409).json({ error: "Billing already exists" });
    }

    // Insert new Billing
    const newBilling = await billing.create({
      billing_name,
      userID,
      email_address,
      billingDate,
      totalAmount,
      paymentMethod,
      transactionStatus,
    });

    //send the the token through mail

      await newBilling.save({ validateBeforeSave: false });

    // Send registration success email
    const mailOptions = {
      email_address: newBilling.email_address,
      subject: "Registration Successful",
      // message: 'Congratulations! Your registration was successful.',
      message: `Your Balance is: ${totalAmount}`,
    };
    const result = await sendMail(mailOptions);

    // console.log(mailOptions)
    // res.status(201).json({

      res.status(200).json({
        success: true,
        newBilling,
        message: `Email sent to ${newBilling.email_address} successfully`,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong", error: error.message });
    } 
};

// Display List
exports.showAllBills = async (req, res, next) => {
  try {
    const billings = await BillingModel.find({ del_status: "Live" });
    if (!billings || billings.length === 0) {
      return res.status(404).json({ message: "billing not found" });
    }
    console.log(billings);

    res.status(200).json({ message: "success", billings });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Display Single Billing
exports.showBilling = async (req, res, next) => {
  try {
    const id = req.params.id;
    const billing = await BillingModel.findOne({ _id: id });

    if (!billing) {
      return res.status(404).json({ message: "Billing not found" });
    }

    res.status(200).json({ message: "success", billing });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update billing
exports.updateBilling = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Validation
    const { error, value } = validateUpdate(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const billing = await BillingModel.findOneAndUpdate({ _id: id }, value, {
      new: true,
    });

    if (!billing) {
      //console.log("Billing not found");
      return res.status(404).json({ message: "Billing not found" });
    }

    res.status(200).json({ billing });
  } catch (error) {
    //console.log(error);
    // Send Error Response
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

  // Delete billing
exports.deleteBilling = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBilling = await BillingModel.findByIdAndUpdate(
      id,
      { del_status: "Deleted" },
      { new: true }
    );
    if (!updatedBilling) {
      return res.status(404).json({ message: "Billing not found." });
    }
    res.status(200).json({ message: "Billing deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
