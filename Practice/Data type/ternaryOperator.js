// Ternary Operator

const un = prompt("Please enter your name");
un === "shraban" ? alert("Welcome admin") : alert("Welcome user");

//Condition ? true: false;

const gender = prompt("Please enter your gender");
gender === "m"
  ? alert("male")
  : gender === "f"
  ? alert("female")
  : alert("other");

// Write a program that calculates the ticket price
// based on age with the following conditions: age below
// 12 pay a ticket price of 5, age below 18 pay a ticket
// price of 10, age below 60 pay a ticket price of 20,
// age over 60 play a ticket price of 15.

// Using Switch Case

const age = prompt("enter the number betwee 1 to 100");
switch (true) {
  case age <= 12:
    alert("Children ticket is only 5");
    break;
  case age > 12 && age <= 18:
    alert("Teen ticket price is only 10");
    break;
  case age > 18 && age <= 60:
    alert("ticket for adult mature person is only 20");
    break;
  case age >= 60:
    alert("ticket for old age is only 15");
    break;
  default:
    alert("invalid age");
}

// Write a program that greets the user based on the
// time of day. Display good morning, good afternnon or
// good evening based on the time of day when you run
// the code.

// Using Ternary Operator

const greets = prmpt("Please enter the today's time");
greets > 1,
  "am" && greets <= 11,
  "am" ? alert("good morning") : greets >= 12,
  "pm" && greets <= 4,
  "pm" ? alert("good afternoon") : alert("Good evening");
