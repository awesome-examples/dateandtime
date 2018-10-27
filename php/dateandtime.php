<?php
// Get the current date and time in the computer's region / timezone
$datetime = new DateTime();

// Display it in the console
echo $datetime->format("Y-m-d H:i:s");

// Log the current year
 echo "Current Year: ".$datetime->format("Y");

// Log the number of the current month, no leading zero.
echo "Current Month (number): ".$datetime->format("n");
// Log the name of the current month.
echo "Current Month (name): ".$datetime->format("F");

// Log the current day of the month, no leading zero.
echo "Current Day: ".$datetime->format("j");
//log the current day of the week in letters
echo "Current Day of the Week: ".$datetime->format("l");

// Log the current week of the year.
echo "Current Week of the Year: ".$datetime->format("W");

//log the current time
echo "Current Time: ".$datetime->format("H:i:s");

?>
