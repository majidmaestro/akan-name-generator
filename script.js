const form = document.getElementById("akanForm");
const result = document.getElementById("result");

// The week day names for 0-6
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Akan names for each weekday
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get values from the HTML form
  const dateValue = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;

  // Convert the date string into numbers
  const birthDate = new Date(dateValue);
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1; // JavaScript month is 0-11
  const year = birthDate.getFullYear();

  // Adjust January and February for the formula
  let formulaMonth = month;
  let formulaYear = year;
  if (formulaMonth === 1 || formulaMonth === 2) {
    formulaMonth += 12;
    formulaYear -= 1;
  }

  const CC = Math.floor(formulaYear / 100); // first two digits of the year
  const YY = formulaYear % 100; // last two digits of the year

  // Calculate the day of the week using the formula
  let dayOfWeek =
    (Math.floor(CC / 4) -
      2 * CC -
      1 +
      Math.floor((5 * YY) / 4) +
      Math.floor((26 * (formulaMonth + 1)) / 10) +
      day) %
    7;

  // Make sure dayOfWeek is between 0 and 6
  dayOfWeek = ((dayOfWeek % 7) + 7) % 7;

  const akanName =
    gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
  const weekdayName = weekDays[dayOfWeek];

  result.textContent = `You were born on ${weekdayName}. Your Akan name is ${akanName}.`;
});
