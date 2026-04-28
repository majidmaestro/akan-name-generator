// Get the form element from the page by its id.
const form = document.getElementById("akanForm");

// Get the result area where we will show the Akan name.
const result = document.getElementById("result");

// The week day names are stored in an array.
// The index 0 means Sunday, 1 means Monday, and so on.
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Male Akan names for each day of the week.
// The order matches the weekDays array, so index 0 is for Sunday.
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

// Female Akan names for each day of the week.
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// This function calculates the day of the week using the given formula.
// It returns a number from 0 to 6 where 0 is Sunday and 6 is Saturday.
function getDayOfWeek(day, month, year) {
  // The formula needs month 13 and 14 for January and February.
  // So we add 12 and subtract 1 from the year in those cases.
  if (month === 1 || month === 2) {
    month += 12;
    year -= 1;
  }

  // CC is the first two digits of the year.
  const CC = Math.floor(year / 100);

  // YY is the last two digits of the year.
  const YY = year % 100;

  // Apply the formula from the project instructions.
  let dayOfWeek =
    (Math.floor(CC / 4) -
      2 * CC -
      1 +
      Math.floor((5 * YY) / 4) +
      Math.floor((26 * (month + 1)) / 10) +
      day) %
    7;

  // JavaScript % can be negative, so this makes it always 0-6.
  return ((dayOfWeek % 7) + 7) % 7;
}

// This function returns the Akan name for the weekday and gender.
function getAkanName(dayOfWeek, gender) {
  if (gender === "male") {
    return maleNames[dayOfWeek];
  }
  return femaleNames[dayOfWeek];
}

// When the form is submitted, run this code.
form.addEventListener("submit", function (event) {
  // Prevent the page from refreshing.
  event.preventDefault();

  // Read the birth date from the form.
  const dateValue = document.getElementById("birthdate").value;

  // Read the selected gender from the form.
  const gender = document.getElementById("gender").value;

  // Convert the date string into a Date object.
  const birthDate = new Date(dateValue);

  // Extract day, month and year from the Date object.
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1; // getMonth() gives 0 for January
  const year = birthDate.getFullYear();

  // Find the weekday index (0-6) for the birth date.
  const dayOfWeek = getDayOfWeek(day, month, year);

  // Pick the correct Akan name using the weekday and gender.
  const akanName = getAkanName(dayOfWeek, gender);

  // Get the weekday name for the text output.
  const weekdayName = weekDays[dayOfWeek];

  // Show the final message on the page.
  result.textContent = `You were born on ${weekdayName}. Your Akan name is ${akanName}.`;
});
