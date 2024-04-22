console.log("Day 2");

// Data type

// A. Primitive Data Type

// 1. String

const person = "Ram";
let female = "Sita";
let num = 0.002;
let user = "Shraban";
let user1 = `Kumar`; // Backtick, Tilde sign
console.log({ person, female, num, user, user1 });

//2. Number

const pi = 3.14;
const num1 = 2;
const num2 = 2.5;
console.log({ pi, num1, num2 });

// 3.Boolearn (true/false)

const isShrabanBoy = true; //Camel Case
const isShrabanMan = false;

console.log({ isShrabanBoy, isShrabanMan });

// 4.Undefined

let test;
var test2;
console.log(test, test2);

// 5.Null

const data = null;
console.log({ data });

// Type conversion & Type Coercion

// Multiply using interaction (prompt)
const val1 = prompt("Please enter first number");
const val2 = prompt("please enter second number");

// Type conversion

const result = Number(val1) * Number(val2);
const stringOnly = String(val1);
console.log({ result, stringOnly });
