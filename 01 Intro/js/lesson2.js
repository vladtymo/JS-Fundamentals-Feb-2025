// --------------- TODO
console.log("&& && && Result:");
console.log(hours > 0 && hours < 23 && hours != 12); // -20

console.log("|| || || Result:");
console.log(hours > 0 || hours < 23 || hours != 12); // -20

console.log(5 > 1 || 5 > 10); // true
console.log(5 > 1 && 5 > 10); // false

// || - return first true value
console.log("10" || "" || null || undefined); // return first true: 10
// && - return first false value
console.log("10" && "false" && null && undefined); // return first false: null

// set default value
let email = prompt("Enter your email:");

// if (email == "")
//     email = "not entered";

// or using || operator
const username = email || "anonymous";

// set default value of email == false
console.log(`Email is ${username}`);

let result = hours < 8 && Math.random();
// the same
if (hours < 8) result = Math.random();

// --------- thernary operator
// syntax: condition ? true_value : false_value

if (5 > 2)
    console.log("Bigger");
else
    console.log("Smaller");

console.log(5 > 2 ? "Bigger" : "Smaller");
