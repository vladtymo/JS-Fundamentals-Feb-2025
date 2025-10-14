// -=-=-=-=-=-=-=- logic statements -=-=-=-=-=-=-=-

// -------- if else statement
// if (condition) { code }

// ariphmetic operations
5 + 10; // 15
5 + true; // 6
// logic operations
"hello" > "bye"; // true
true === false; // false
10 !== "10"; // true

const number = +prompt("Enter your number:");

// ---- TASK: check if number is valid
if (isNaN(number)) console.warn("Your number is invalid!");
else {
  console.log("Your number is valid!");
  if (number % 2 === 0) {
    console.log("Number is even!");
  } else {
    console.log("Number is odd!");
  }
}

// ---- TASK: check your age
const age = +prompt("Enter your age:");

if (age >= 18) console.log("Grant Access!");
else {
  console.warn("Deny Access!");
  console.warn("Please wait until 18 years old!");
}

// ----- TASK: show weekday name by number
const weekday = +prompt("Enter current weekday (1-7):");

// Alt + Shiht - select code block

if (weekday === 1) console.log("Monday!");
else if (weekday === 2) console.log("Tuesday!");
else if (weekday === 3) console.log("Wednesday!");
else if (weekday === 4) console.log("Thursday!");
else if (weekday === 5) console.log("Friday!");
else if (weekday === 6) console.log("Saturday!");
else if (weekday === 7) console.log("Sunday!");
else console.error("Your weekday is invalid!");

switch (weekday) {
  case 1:
    console.log("Monday!");
    break;
  case 2:
    console.log("Tuesday!");
    break;
  case 3:
    console.log("Wednesday!");
    break;
  case 4:
    console.log("Thursday!");
    break;
  case 5:
    console.log("Friday!");
    break;
  // ...
  default:
    console.error("Your weekday is invalid!");
    break;
}

// -------- switch
// syntax: switch(expression)
//      case value1: code; break;
//      case value2: code; break;

// break: go out the statement (switch, loops)

switch (weekday) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("I am working now!");
    break; // go out from the switch
  case 6:
  case 7:
    console.log("I am free!");
    break;
  default:
    console.error("Weekday must be in the range 1...7!");
}
// go here after break operator

switch (true) {
  case weekday < 1:
    console.error("Weekday can not be less than 1!");
    break;
  //case [1, 2, 3, 4, 5].includes(weekday): console.log("Working...");
  case weekday > 7:
    console.error("Weekday can not be more than 7!");
    break;
  default:
    console.log("Weekday value in the valid range!");
}

// logic conbinators: || (або) && (і)
const hours = +prompt("Enter hours: ");

// check range 0...23
// hours = 50
if (hours >= 0 && hours <= 23) console.log("Hours is correct!");
else console.warn("Hours is incorrect!");
