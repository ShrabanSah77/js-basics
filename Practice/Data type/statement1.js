// write a js progrma that ask user the time
// if the time is in between 4 and 5:30
// alert class is in session
// else
// alert class is completed for today

const time = prompt("What is the time? Please enter in between 1 to 6");
const timeCondition = time >= 4 && time <= 5.3;
if (timeCondition) {
  alert("Class session is going on");
} else {
  alert("End of the session for today");
}

// Switch case statement

const userTime = Number(prompt("Plese enter the number between 1 to 6"));
switch (true) {
  case userTime >= 1 && userTime < 4:
    alert("class has not started");
    break;

  case userTime >= 4 && userTime <= 5.3:
    alert("class is going on");
    break;

  case userTime > 5.3 && userTime <= 6:
    alert("clss is over");
    break;
  default:
    alert("Invalid number");
}

// Scoring grading tool
// userScore = 85;
// Rank?? // A,B,C,D,E

// condition

// A+= 90 and above
// A = above 80 and below 90
// B = above 70 and below 80
// C = above 60 and below 70
// D = above 50 and below 60

const userScore = Number(prompt("please enter user score"));
switch (true) {
  case userScore >= 90:
    alert("he/she score A+");
    break;
  case userScore >= 80 && userScore < 90:
    alert("he/she score A");
    break;
  case userScore >= 70 && userScore < 80:
    alert("he/she score B+");
    break;
  case userScore >= 60 && userScore < 70:
    alert("he/she score B");
    break;
  case userScore >= 50 && userScore < 60:
    alert("he/she score C+");
    break;
  default:
    alert("Fail");
}
