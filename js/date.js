// Various ways of getting and displaying the date in JavaScript
// This package makes life easier: https://momentjs.com/

// Get the current date in the computer's region / timezone
var d = new Date();

// Display it in the console
console.log(d);

// Log the current year
console.log("Current Year: " + d.getFullYear());

// Log the current month, adding one as it starts from 0.
console.log("Current Month: " + (d.getMonth() + 1));

// Log the current day
// With this function, Sunday is 0, Monday is 1, and so on.
console.log("Current Day (id): " + d.getDay());

// Return the weekday
// Create an array for the weekday [names]
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

// Map the current day to the weekday name and output it to the console
console.log("Current Weekday: " + weekday[d.getDay()]);
