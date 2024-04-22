/*

// Interaction:

1. Browser as user interface
2.Keywords
    a. Alert - alert the users by sending any kind of message
    b. Prompt - ask users to unput value
    c. Confirm - Yes/No for User
    
3. Example:

    a. alert("message");
    b. prompt("How old are you?");
    c. confirm("Are you a student?")

*/

// alert("Hello World");
// const question1 = prompt("What is your name?");
// const question2 = confirm("Are you 18 years or above?");
// console.log({ question1, question2 });

// Question: Update the above question1 and quesiton2 to print
// name and age through alert

// const question1 = prompt("What is your name?");
// const question2 = confirm("Are you 18 years or above?");
// alert(question1 + " is your name and you are " + question2 + " above 18 years old");

// Write a JS program for multiplication calculator for 3 digits

const num1 = prompt("enter first number");
const num2 = prompt("enter second number");
const num3 = prompt("enter third number");

const result = num1 * num2 * num3;
console.log(result);
