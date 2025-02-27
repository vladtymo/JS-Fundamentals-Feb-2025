// -=-=-=-=-=-=-=- Functions -=-=-=-=-=-=-=-

// function declaration: function name(parameters) { ...body... }
// function expression: function (parameters) { ...body... }
// arrow function: (parameters) => ...body...

// naming: printSomething() getSmth() setSmth() changeSmth() checkSmth() ...
function showMessage() {
    const n = Math.round(Math.random() * new Date().getFullYear() + 1);
    console.log("I like JavaScript! Year: ", n);
}

// function invokation: name(parameter values);
showMessage();
showMessage();
showMessage();

console.log(Math.random());

// function to show a random value in range 0...10
function printRandomNumberTo10() {
    console.log(Math.floor(Math.random() * 11));
}

console.warn("Invoke func");
printRandomNumberInRange(4, 44);

// ----------- parameters -----------
// function parameters: name(param1, param2) { ... }

function printRandomNumberInRange(min, max) {
    console.log(Math.floor(min + Math.random() * (max - min) + 1));
}

showMessage();

// printRandomNumberTo10();
printRandomNumberInRange(10, 20);
printRandomNumberInRange(80, 100);
printRandomNumberInRange(200, 300);

// TASK: show count of value in the array
const arr = [3, 6, 1, 7, 3, 8, 3, 2, 3, 8];
const prices = [120.5, 10, 40, 10, 50, 10];

function showCount(numbers, value) {
    console.log("Value count: " + numbers.filter((i) => i === value).length);
}

showCount(arr, 3);      // 4
showCount(prices, 10);  // 3

// ----------- return -----------
// return operator: ends function and return value from it
function mult(a, b) {
    return a * b;
    // return - ends function and return a value
    console.log("Ignored"); // ignored
}

let res = mult(4, 8);

// funciton with default parameter values
function getRandomNumberInRange(min = 0, max = 100) {
    return Math.floor(min + Math.random() * (max - min) + 1);
}

showMessage();
console.log("Random value: " + getRandomNumberInRange());

// initialize array with random value (10...40)
for (let i = 0; i < prices.length; i++) {

    prices[i] = getRandomNumberInRange(10, 40);
}
console.log("Prices:", prices);

console.log("Random value: " + getRandomNumberInRange(30, 50)); // 30...50
console.log("Random value: " + getRandomNumberInRange(3));      // 3...100
console.log("Random value: " + getRandomNumberInRange());       // 0...100

// TASK: calculate rectangle area
function getArea(width, height) {

    if (width < 0 || height < 0) {
        console.error("Invalid value!");
        return null; // close function
    }

    return width * height;
}

let area = getArea(20, 6);
console.log("Area:", area == null ? "error" : area);
console.log("Area:", area || "error");
console.log("Area:", area ?? "error");

// ----------------------------------------------------------
// ------------------------ ADVANCED ------------------------
// ----------------------------------------------------------

// ----------- hoisting: declaring variables / funciton before using them
console.log(salary); // undefined
var salary = 1200;
console.log(salary); // 1200

// ----------- callback functions -----------
// 1 - function declaration
function increment(x) {
    return x + 1;
}
function stepin(x) {
    return x * x;
}

// predicate - that returns boolean
// func/callback/fn - that returns something
// action - that has no parameters and no return value

function changeArray(array, changeFunction) { // changeFunc - callback function

    for (let i = 0; i < array.length; i++)
        array[i] = changeFunction(array[i]);
}

let numbers = [4, 2, 5, -7, 10, 33];
console.log("Original: ", numbers);

changeArray(numbers, stepin);
console.log("Incremented: ", numbers);

// 2 - function expression (anonymous function)
changeArray(numbers, function (x) { return x * x; });
console.log("Stepin: ", numbers);

// 3 - arrow function
changeArray(numbers, (x) => x * x);
console.log("Negative: ", numbers);

// using callback with array methods
function isEven(x) {
    return x % 2 === 0;
}

numbers.filter((x) => x > 10);
numbers.filter(isEven);

// ----------- recursive functions -----------
function getFactorial(value) { // 3
    if (value == 1) return 1; // close function
    return getFactorial(value - 1) * value;
}

console.log(getFactorial(3)); // !3 = !2 * 3
console.log(getFactorial(5)); // !5 = 1 * 2 * 3 * 4 * 5 = 120

// ----------- closure -----------
function createClosure() {
    // data
    let a = 10;
    let b = 20;

    return function () {
        ++a;
        console.log(`a = ${a} | b = ${b}`);
        ++b;
    }
}

const show = createClosure();

show(); // 11 | 20
show(); // 12 | 21
show(); // 13 | 22

// TASK: create a closing function to get the next Fibonacci number
// 0 1 1 2 3 5 8 13 21...

function getFunction() {
    // ----- outer area -----

    // create variables
    let a = 0;
    let b = 1;

    return function () {
        // ----- inner area -----
        console.log(a);
        let temp = a;
        a = b;
        b += temp;
    };
}

// get closure function
const showNext = getFunction();

for (let i = 0; i < 10; i++) {
    showNext(); // invoke
}
