'use strict';

/*
const bookings = [];

const createBooking = function (
	flightNum,
	numPassengers = 1,
	price = 199 * numPassengers
) {
	// ES5
	// numPassengers = numPassengers || 1;
	// price = price || 199;

	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

// HOW PASSING AN ARGUMENT WORKS: VALUE VS REFERENCE
const flight = 'LH234';
const jonas = {
	name: 'Jonas Schmedtmann',
	passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
	flightNum = 'LH999';
	passenger.name = 'Mr.' + passenger.name;

	if (passenger.passport === 24739479284) {
		alert('Checked In');
	} else {
		alert('Wrong passport!');
	}
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
	person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

// Functions accepting callback functions
// First generic function
const oneWord = function (str) {
	return str.replaceAll(' ', '').toLowerCase();
};

// Second generic function
const upperFirstWord = function (str) {
	const [first, ...others] = str.split(' ');
	return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
	console.log(`Original string: ${str}`);
	console.log(`Transformed string: ${fn(str)}`);

	// Besides methods functions have properties
	console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord); // we are only passing in the 'upperFirstWord' as a value and not calling it as afunction because the transformer function would do the calling.
transformer('Javascript is the best!', oneWord); // 'oneWord and upperFirstWord' are callback funtions because we didnt call them ourself.
