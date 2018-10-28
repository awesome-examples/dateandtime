// getting the time in UTC format in JavaScript

// get the current datetime based on the user's computer's local timezone
const now = new Date();

// get the hours in the UTC standard (Coordinated Universal Time) 
const hours = now.getUTCHours();

// get the minutes in the UTC standard (Coordinated Universal Time) 
const minutes = now.getUTCMinutes();

// get the seconds in the UTC standard (Coordinated Universal Time) 
const seconds = now.getUTCSeconds();

// display the time  
console.log(`point of time, the variable was created: ${hours}:${minutes}:${seconds}`);
