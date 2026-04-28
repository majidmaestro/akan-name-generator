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

function getDayOfWeek(day, month, year) {
  // Adjust January and February for the formula
  if (month === 1 || month === 2) {
    month += 12;
    year -= 1;
  }

  const CC = Math.floor(year / 100); // first two digits of the year
  const YY = year % 100; // last two digits of the year

  let dayOfWeek =
    (Math.floor(CC / 4) -
      2 * CC -
      1 +
      Math.floor((5 * YY) / 4) +
      Math.floor((26 * (month + 1)) / 10) +
      day) %
    7;

  return ((dayOfWeek % 7) + 7) % 7;
}

function getAkanName(dayOfWeek, gender) {
  if (gender === "male") {
    return maleNames[dayOfWeek];
  }
  return femaleNames[dayOfWeek];
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const dateValue = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;

  const birthDate = new Date(dateValue);
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1; // JavaScript month is 0-11
  const year = birthDate.getFullYear();

  const dayOfWeek = getDayOfWeek(day, month, year);
  const akanName = getAkanName(dayOfWeek, gender);
  const weekdayName = weekDays[dayOfWeek];

  result.textContent = `You were born on ${weekdayName}. Your Akan name is ${akanName}.`;
});
