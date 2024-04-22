// Operator Data Type

// Symbols : AND=&&, OR=||, and NOT=!

const val1 = prompt("Please enter first number");
const val2 = prompt("please enter second number");

const andCheck = val1 && val2;
const orCheck = val1 || val2;
const notCheck = !val1;

console.log({ andCheck, orCheck, notCheck });