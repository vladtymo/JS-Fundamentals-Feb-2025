// -=-=-=-=-=-=-=- Loops -=-=-=-=-=-=-=-

// ----- while - цикл з передумовою
// syntax: while(condition) { ...code... }

// вічний цикл: цикл, в якого умова завжди = true
let age = +prompt("Enter age:"); // initialize

while (age < 0) { // condition
    // iteration
    console.log(`Invalid value!`);
    age = +prompt("Enter age again:");
}

let current = 0;
let finish = +prompt("Enter count:"); // 10

while (current < finish) { // condition
    // iteration
    console.log(`[${current}] - One more iteration...`);
    ++current; // expression
}

console.warn("Finish!");

// ідентичне виконання за допомогою циклу for

// ----- for - цикл, який виконується певну кількість разів
// for(initialize; condition; expression) { ...code... }

for (let i = 1; i < 10; ++i) {
    // continue - skips current iteration
    if (i % 3 === 0) continue;
    console.log(`[${i}] - One more iteration...`);

    // break - ends the loop
    if (i % 7 === 0) {
        console.warn("Loop broke!");
        break;
    }
}

console.log(`a = ${current}`); // last value
//console.log(i); // is not defined

// виконати цикл, до поки користувач не введе позитивне число
let value = +prompt("Enter your number:");

while (value < 0) {
    console.error("Invalid number!");
    value = +prompt("Enter number again:");
}

console.log("Correct!");

// ----- do while() - цикл з післяумовою
// syntax: do while() { ...code... }

// запросити введення числа, поки воно не буде позитивним
let number;
do {
    number = +prompt("Enter a positive number:");
} while (number < 0);

console.log("Thanks!");

// TASK: show collection of pairs: 1 - 10, 2 - 9, 3 - 8
for (let start = 1, end = 10; start <= 10; ++start, --end)
    console.log(`${start} - ${end}`);

// ----- for in - iterate all object keys
// syntax: for (variable in object) {}
let array = [4, 6, 2, 6, -8, 0, 85, 120, 3];
let user = {
    username: 'bob228',
    address: 'Rivne, Ukraine',
    id: 22
};

array.push(30);
// [10], [11] = undefined
array[12] = 40; // bad practice

console.log("Array:", array);

console.log('Array indexes:');
for (let ind in array) {
    console.log(`Key: ${ind}`); // 0...9,12
}

console.log('User properties:');
for (const prop in user) {
    console.log(`Property: ${prop} = ${user[prop]}`); // username, address, id
}

console.log('Array values:');

let newArr = [];

// ----- for of - iterate all values of the object
for (let item of array) {
    //++item; // change copy, does not effect to original array
    console.log(`Element: ${item}`);
}

// show array
console.log(array);

// show all elements by [for] loop
for (let i = 0; i < array.length; ++i) {
    //++array[i]; // modify the original array item
    console.log(array[i]);
}

// TASK: додати в масив 10 цін з випадковим значенням від 0 до 100
let prices = [];
const count = 10;

console.log(Math.random()); // 0...1 (0.5, 0.999)

for (let i = 0; i < count; ++i) {
    let value = Math.floor(Math.random() * 100); // [0..100)
    prices.push(value);
}

for (const price of prices) {
    console.log(`Price: ... ${price} ... $`);
}

// TASK: get summ of all prices in the array, when price > 50
let summ = 0;

// 1 - using for loop
for (let i = 0; i < prices.length; ++i) {
    if (prices[i] > 50)
        summ += prices[i];
}
// 2 - using for of
for (const i of prices) {
    if (i > 50)
        summ += i;
}
// 3 - using .forEach()
prices.forEach((i) => {
    if (i > 50)
        summ += i;
});

// using .reduce() method
summ = prices.reduce((r, i) => i > 50 ? r + i : r, 0);

console.log("Summ:", summ);
