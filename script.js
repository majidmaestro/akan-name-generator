// Get the form element from the page by its id.
// hey look at these parts from my html file
// const-we use to create variable that won't change later
// document it represents the entire page
// .get elementbyid-tells computer to go into html and find element with that ID
const form = document.getElementById("akanForm");

// Get the result area where we will show the Akan name.
const result = document.getElementById("result");

// Array of month names in order (index 0 = January, index 1 = February, etc).
// This is used to convert month names to numbers.
// element inside array - strings
// later if i pick march it computer sees that as index 2
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// The week day names are stored in an array.
// The index 0 means Sunday, 1 means Monday, and so on.
// we are creating a list contaning days of the week
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
// we are creating a list containing male names
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
// we are also creating a list containig female names
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// This function converts a month name to its number (1-12).
// For example: "January" becomes 1, "February" becomes 2.
// a function- you key in something e.g january it gives u back a result
function getMonthNumber(monthName) {
  // indexof-look at thelist of months i made earlier and find its position-assingns it a number
  // +1 -usually we call january(1) so this +1 is for adding +1 later to make work easier for us
  // return-it spits out final number so other parts of the code can use it
  return monthNames.indexOf(monthName) + 1;
}
// 1. understand the formula
// -math.floor(cc/4):takes first two digit like 20 divides by 4 and drops the decimal
//               why:every 400 yrs calender skips a leap year rule (makes it longtime)
// -2*cc-1: subtracts double the century and then subtracts 1 ?
//     why: a calibration step or starting step its like setting a watch once so all the other things can follow
// Math.floor ((5*YY)/4):takes last two digits of the year multiplies by 5 then divides by 4, and drops the decimal
//                   why:basically calculates how many extra days have piled up bcoz of the year passing
// -math.floor((26*(MM + 1))/10):uses month number to know how many days we are shifting forward?
//                          why:month have different lenght it creates a pattern of numbers that perfectly matches the jump in day btwn months
// +DD:it simply adds day of the month
// why:if u are born on 15th instead of 14th the result need to move forward exactly by one day and so on
// %7: divides the whole total by 7 and onlu keeps the remainder
// why: we dont care about the total number of days we only care on remainder e.g(if remainder is 0 its sunday,if it is 1 it is monday)
// 2. simple example(january,15 2024)
// *code adjustment rule:so january is month 13 year 2023
// cc=20
// YY=23
// MM=13
// Day=15
// -century leap:20/4=5
// -anchor: -(2*20)-1=-41
// -Year formula:(5*23)/4=115/4=28(decimals drop)
// -month formula:(26*(13+1))/10=364/10=36(dd)
// -day(15):5-41+28+36+15=43
// -final(%7):43/7=6 rem.1
// result:monday bcoz 1 reps mondayzz

// This function calculates the day of the week using the given formula.
// It returns a number from 0 to 6 where 0 is Sunday and 6 is Saturday.
// a function- you key in something e.g january it gives u back a result
function getDayOfWeek(day, month, year) {
  // The formula needs month 13 and 14 for January and February.
  // So we add 12 and subtract 1 from the year in those cases.
  //   the formula works in a much really weird way
  // if (month === 1 || month === 2)- checks is the month january(1)orFebuary(2)
  // if it is january or febuary, it adds 12 to the month (making them 13 or 14) and also it subtracts one from the year(-=1)
  // e.g january 2024 becomes month 13 of 2023(special formula no month 1 and 2)
  if (month === 1 || month === 2) {
    month += 12;
    year -= 1;
  }

  // CC is the first two digits of the year.
  //   we are splitting the year into two parts the century(19) and the year(95)
  // year /100 - this just divides the year by 100 e.g 1995 bcomes 19.95
  // math.floor - it removes decimal leaving us with whole numbers(19)*our century
  // % and math.floor - used to remove decimals bcoz we cant have tuesday and a half day
  const CC = Math.floor(year / 100);

  // YY is the last two digits of the year.
  //   this gives us the last two digits
  // % - modulo(remainder) if u divide 1995 by 100 remainder is 95 so we require that 95
  const YY = year % 100;

  // Apply the formula from the project instructions.
  //   calculates numbers of days from 0-6
  let dayOfWeek =
    //   this are just adjust for leap years
    // divides century by 4 and rounds down removing dec.
    // this it accounts for leap year every 400yrs
    // (this helps pull the calender back into alignments)
    (Math.floor(CC / 4) -
      // subtracts twice the century and one
      // constant-part of the math that offsets the start of the week across different centuries
      2 * CC -
      1 +
      //   adjust for leap year within the centuries`
      // takes the last two digits of the year multiplies by 5 ivides by 4 and it roundsit down
      // it accounts for regular years
      // imagine u have birthday on monday Next year it will usually be on tuesday but if it is a leap year it will automatically skip to weno
      // *calculates how many skips have happened since start of century
      Math.floor((5 * YY) / 4) +
      //   it calculates how many days are in each month
      // maps irregular lenghts of map into linear sequence so the days lign correctly(a month can have 30 or 31 dys)
      // +day%7 -- adds specific day of the month and then takes the modulo 7
      // if date is 15 it divides by 7 leaves a remainder of 1 so it is a monday
      Math.floor((26 * (month + 1)) / 10) +
      day) %
    7;

  // JavaScript % can be negative, so this makes it always 0-6.
  return ((dayOfWeek % 7) + 7) % 7;
}

// This function returns the Akan name for the weekday and gender.
// telling computer am going to give you two things the day of the week and the gender
//
function getAkanName(dayOfWeek, gender) {
  // if the gender is male, return the name from the maleNames array using the dayOfWeek as the index.
  if (gender === "male") {
    // go into malenames and pull the name that matches the day of the week index
    // if born on sunday it will pull the name at index 0 which is kwasi and so on
    return maleNames[dayOfWeek];
  }
  //it assumes that u are looking for female and it will pull the name from the femaleNames array using the dayOfWeek as the index.
  //
  return femaleNames[dayOfWeek];
}

// When the form is submitted, run this code.
// it waits for user to click submit button after ndio inaanza kufanya
//
form.addEventListener("submit", function (event) {
  // Prevent the page from refreshing.
  // by default when u submit a form the page refreshes but we dont want that because we want to show the result on the same page so we use event.preventDefault() to stop the default behavior of refreshing the page

  event.preventDefault();

  // Read the day from the form.
  // this is where code reaches into boxes and pulls the value that user has entered
  // when one "15" the computer sees it as a text not a number
  // parseInt - it converts the text into a number so that we can do math with it later
  //
  const day = parseInt(document.getElementById("day").value, 10);

  // Read the month name from the form (e.g., "January", "February").
  // this is where code reaches into boxes and pulls the value that user has entered
  const monthName = document.getElementById("month").value;

  // Convert the month name to a number (1-12).
  // computer doesnt understand january it knows numbers
  // this line takes the month name that user has entered and converts it into a number using the getMonthNumber function we defined earlier
  const month = getMonthNumber(monthName);

  // Read the year from the form.
  // this is where code reaches into boxes and pulls the value that user has entered
  // parseInt - it converts the text into a number so that we can do math with it later
  // when one "2024" the computer sees it as a text not a number
  // the 10 in parseInt is for specifying that the number is in base 10 (decimal), which is standard for years. It ensures that the string is correctly interpreted as a decimal number.
  const year = parseInt(document.getElementById("year").value, 10);

  // Read the selected gender from the form.
  // this is where code reaches into boxes and pulls the value that user has entered
  // the value of the gender input will be either "male" or "female"
  // the computer uses this value later to decide which list of names to pull from (maleNames or femaleNames)
  // 
  const gender = document.getElementById("gender").value;

  // Find the weekday index (0-6) for the birth date.
  // this line calls the getDayOfWeek function with the day, month, and year that the user entered to calculate which day of the week they were born on. 
  // the getDayOfWeek function tells computer to return a number from 0 to 6, where 0 corresponds to Sunday, 1 to Monday, and so on up to 6 for Saturday.
  // for example if the user was born on a Monday, getDayOfWeek will return 1, and that number will be stored in the variable dayOfWeek for use later in the code.
  const dayOfWeek = getDayOfWeek(day, month, year);

  // Pick the correct Akan name using the weekday and gender.
  // this line calls the getAkanName function with the dayOfWeek index and the gender that the user selected to determine the correct Akan name.
  // the getAkanName function checks the gender and then uses the dayOfWeek index to pull the corresponding name from either the maleNames array or the femaleNames array.
  // for example, if dayOfWeek is 1 (Monday) and gender is "male", getAkanName will return "Kwadwo" from the maleNames array, and that name will be stored in the variable akanName for use later in the code.
  const akanName = getAkanName(dayOfWeek, gender);

  // Get the weekday name for the text output.
  // this line uses the dayOfWeek index to get the name of the weekday from the weekDays array. For example, if dayOfWeek is 1, it will get "Monday" from the weekDays array and store it in the variable weekdayName for use in the final message.
  // this is just for making the final message more user-friendly by showing the actual name of the day instead of just a number.
  const weekdayName = weekDays[dayOfWeek];

  // Show the final message on the page.
  // this line updates the text content of the result element on the page to display a message that includes the weekday name and the Akan name that was calculated. For example, it might say "You were born on Monday. Your Akan name is Kwadwo." This is how we present the final output to the user after they submit the form.
  // 
  result.textContent = `You were born on ${weekdayName}. Your Akan name is ${akanName}.`;
});

//
