var today = new Date(); // create a new date object
var hourNow = today.getHours(); // find the current hour
var greeting;

if (hourNow > 18) {
	greeting = 'Good evening!';
} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
} else if (hourNow > 0) {
	greeting = 'Good morning!';
} else {
	greeting = 'Welcome!';
}
/* This script displays a greeting to the user based on 
the current time.*/


document.write('<h3>' + greeting + '</h3>');