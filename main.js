/**
 * Nested Function
 */

let a = 10;

function outer() {
	let b = 20;
	function inner() {
		let c = 30;
		console.log(a, b, c);
	}
	inner();
}
outer();

/**
 * Curried function
 */
const Curry = (paramA) => (paramB) => (paramC) => paramA + paramB + paramC;

const curryA = 10;
const curryB = 20;
const curryC = 30;
const CurryA = Curry(curryA);
const CurryB = CurryA(curryB);
const CurryC = CurryB(curryC);
console.log(CurryC);

/**
 * this keyword
 */

function sayMyName(name) {
	console.log(`My name is ${name}`);
}

sayMyName("Ty");

const person = {
	name: "Danh",
	sayMyName: function sayMyName() {
		console.log(`My name is ${this.name}`);
	},
};
globalThis.name = "super man";
function sayThisName() {
	console.log(`My name is ${this.name}`);
}
sayThisName();
sayThisName.call(person);
sayThisName.bind(person)();

function Person(name) {
	this.name = name;
}

const p1 = Person("danh");
const p2 = Person("ty");

/**
 * Prototype
 */

function Person(fName, lName) {
	this.firstName = fName;
	this.lastName = lName;
}

const person1 = new Person("Bruce", "Wayne");
const person2 = new Person("Clark", "Kent");

Person.prototype.getFullName = function () {
	return `${this.firstName} ${this.lastName}`;
};

person1.getFullName = function () {
	return `${this.firstName} - ${this.lastName}`;
};
console.log(person1.getFullName());
console.log(person2.getFullName());

function SuperHero(fName, lName) {
	Person.call(this, fName, lName);
	this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
	console.log("Fighting Crime");
};

SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor = SuperHero;

const batman = new SuperHero("Pham", "Danh");
console.log(batman.getFullName());

/**
 * Class
 */

class People {
	constructor(fName, lName) {
		this.firstName = fName;
		this.lastName = lName;
	}

	sayMyName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

const classPeople1 = new People("Thi", "Thuan");
console.log(classPeople1.sayMyName());

class Coder extends People {
	constructor(fName, lName, position) {
		super(fName, lName);
		this.position = position;
	}

	goWork() {
		console.log("Go to work with pos=" + this.position);
	}
}

const coder1 = new Coder("Duc", "Ni", "Senior");
console.log(coder1.sayMyName());
coder1.goWork();

/**
 * Itarables and Iterators
 */

const customIterable = {
	[Symbol.iterator]: function () {
		let step = 0;
		const iterator = {
			next: function () {
				step++;
				if (step === 1) {
					return { value: "customIterable: Hello", done: false };
				}
				if (step === 2) {
					return { value: "customIterable: World", done: false };
				}
				return { value: undefined, done: true };
			},
		};
		return iterator;
	},
};

for (const word of customIterable) {
	console.log(word);
}
// String, Array, Maps, Set -> are itorators

/**
 * Generator
 */

function normalFunction() {
	console.log("normalFunction: Hello");
	console.log("normalFunction: World");
}

normalFunction();

function* generatorFunction() {
	yield "generatorFunction: Hello";
	yield "generatorFunction: World";
}

const generatorObj = generatorFunction();
for (const word of generatorObj) {
	console.log(word);
}
