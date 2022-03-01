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
