// Ctrl + / - comment/uncomment
// Alt + Up/Down - move line

// ----------- console -----------
console.log("Information message!");
console.warn("Warning message!");
console.error("Error message!");
console.table(["apples", "oranges", "bananas"]);

// --------- data types
let price = 3200; // number
let notANumber = NaN; // number
let longNumber = 10000000000n; // BigInt

let address = "'Rivne', Ukraine"; // string
let letter = "F"; // string

let escapes = 'hello "Vlad"\tHow are you?\n???';

let isValid = true; // boolean

let activeUser = null; // null
let emptyObject = undefined; // undefined (bad practice)

let myKey = Symbol(3400);
let myKey2 = Symbol(3400);
console.log(myKey == myKey2);

let worker = {
  name: "Bob",
  salary: null,
};
// types: string, number, boolean
console.log(worker.salary); // null
console.log(worker.price); // undefined

// ----- check data type: typeof
console.log(typeof price);
console.log(typeof activeUser);
console.log(typeof emptyObject);

// ----- weak/dynamic typing language
price = "4800.99$";
console.log("Price type:", typeof price);

// ----- constants
const koef = 2.97; // number
// koef = 100;     // error

// ----------- client dialogs -----------
alert("Hello Client!");

let email = prompt("Enter your email:");

// 1 - concatenation: str + str
console.log("Your email is " + email + "!!!");
// 2 - interpolation: `...${}...`
console.log(`Your email is ${email}!!!`);

// convert string to number: +str Number(str)
let year = +prompt("Enter current year:");

if (isNaN(year)) {
  console.log("Invalid year!");
}

console.log("Current year is ", year); //
console.log(`Prev year is ${year + 1}`); // 2024 + 1

const exit = confirm("Do you want to exit?");

if (exit == true) {
  console.log("Goodbye!");
} else console.log("Let's go ahead!");

// thernary operator: (condition) ? true_value : false_value
console.log(exit == true ? "Goodbye!" : "Let's go ahead!");

// Alt + Arrow Up/Down
