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
*/

/*
// How Passing Argument Works: VALUE VS REFERENCE
const flight = 'LH234';
const jonas = {
	name: 'Jonas Schmedtmann',
	passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
	flightNum = 'LH999';
	passenger.name = 'Mr. ' + passenger.name;

	if (passenger.passport === 24739479284) {
		alert('Checked in');
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

/*
// Functions Accepting Callback Functions
const oneWord = function (str) {
	return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
	const [first, ...others] = str.split(' ');
	return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order Function
const transformer = function (str, fn) {
	console.log(`Original string: ${str}`);
	console.log(`Transformed string: ${fn(str)}`);

	console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
	console.log('Hi!');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*
// Functions Returning Functions
const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};
const greeterHey = greet('Hey');
greeterHey('Jessica');
greeterHey('Steven');

greet('Hello')('Jessica');

// Challenge
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jessica');
*/

// The Call and Apply Methods
const lufthansa = {
	airline: 'Lufthansa',
	iastaCode: 'LH',
	bookings: [],
	// book: function (){}
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iastaCode}${flightNum}`
		);
		this.bookings.push({ flight: `${this.iastaCode}${flightNum}`, name });
	},
};

lufthansa.book(239, 'Jessica Walter');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
	airline: ' Eurowings',
	iastaCode: 'EW',
	bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// CALL METHOD
book.call(eurowings, 23, 'Sarah williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
	airline: 'Swiss Air Lines',
	iastaCode: 'LX',
	bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// APPLY METHOD
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
