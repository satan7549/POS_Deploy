// Import necessary modules and models for the controller
const KotModel = require("../KOT/index");

// Function to generate a new KOT number
const generateKOTNumber = async () => {
  // Get the current date
  const currentDate = new Date();

  // Find the last KOT (Kitchen Order Ticket) with "del_status: 'Live'" and sort by createdAt in descending order
  const lastKOT = await KotModel.findOne({ del_status: "Live" }).sort({
    createdAt: -1,
  });

  // If no KOT exists or the last KOT's date is different, start the count from 1
  if (!lastKOT || !isSameDate(currentDate, lastKOT.createdAt)) {
    return generateNewKOTNumber(currentDate, 1);
  }

  // Increment the count in the last KOT's number and return the new KOT number
  const lastKOTNumber = lastKOT.kot_number;
  if (!lastKOTNumber || typeof lastKOTNumber !== "string") {
    return generateNewKOTNumber(currentDate, 1);
  }
  const lastCount = parseInt(lastKOTNumber.slice(-3), 10);
  const newCount = lastCount + 1;

  return generateNewKOTNumber(currentDate, newCount);
};

// Function to generate a new KOT number based on the date and count
const generateNewKOTNumber = (date, count) => {
  const dateString = date.toISOString().slice(0, 10).replace(/-/g, "");
  const paddedCount = padLeft(count, 3);
  return dateString + paddedCount;
};

// Function to check if two dates have the same year, month, and day
const isSameDate = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

// Function to left pad a number with leading zeros to a specific length
const padLeft = (number, length) => {
  let str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
};

module.exports = generateKOTNumber;
