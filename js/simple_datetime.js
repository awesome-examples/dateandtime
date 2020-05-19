var dateTime = new Date();

var currentDate = dateTime.getDate() + "/" + (dateTime.getMonth() + 1) + "/" + dateTime.getFullYear();
console.log(currentDate);

var currentTime = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
console.log(currentTime);
