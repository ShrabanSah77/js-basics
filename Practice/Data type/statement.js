// if else
// Switch case

// Write a program that uses age to print the status of person

const age = prompt("Enter the age");

if (age >= 30) {
  alert("you are old");
} else {
  alert("You are Young");
}

// write a js program that check your username and passwrod.
// If username is your name and password is your name
// Print welcome admin
// else
// if username is equal to password but for another person
//Print welcome user

const adminname = "shraban";
const adminpassword = "sah";

let username = prompt("Enter your username");
let password = prompt("Enter your password");
if (username === adminname && password === adminpassword) {
  alert("Welcome admin");
} else {
  alert("Welcome user");
}

// write a js program that ask user the time
// if the time is in between 4 and 5:30
// alert class is in session
// else
// alert class is completed for today

const startTime = 4;
const endTime = "5:30";

let initialTime = prompt("Please enter initial time");
let finalTime = prompt("please enter final time");
if (initialTime === startTime && finalTime === endTime) {
  alert("Class is in session");
} else {
  alert("class is completed for today");
}

// Write a program that calculates the ticket price
// based on age with the following conditions: age below
// 12 pay a ticket price of 5, age below 18 pay a ticket
// price of 10, age below 60 pay a ticket price of 20,
// age over 60 play a ticket price of 15.

const age1 = prompt("please enter the age");
if (age1 <= 12) {
  alert("the price for children is only 5");
} else {
  if (age1 > 12 && age1 <= 18) {
    alert("the ticket for teen is only 10");
  } else {
    if (age1 > 18 && age1 <= 60) {
      alert("The ticket for mature person is only 20");
    } else {
      if (age1 > 60) {
        alert("the ticket price for old age is only 15");
      } else {
        alert("Invalid age");
      }
    }
  }
}
