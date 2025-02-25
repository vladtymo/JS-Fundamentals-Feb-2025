// ------------ operators ------------
// ariphmetic operators
console.log(`a + b: ${5 + 3}`); // 8
console.log(`a - b: ${5 - 3}`); // 2
console.log(`a * b: ${5 * 3}`); // 15
console.log(`a / b: ${20 / 4}`); // 5
console.log(`a % b: ${23 % 7}`); // 23 / 7 = 3... = 2

// exponentiation **

console.log(`a ** b: ${2 ** 8}`); // 256
console.log(`a ** b: ${Math.pow(2, 8)}`); // 256

// logic operators
// always returns boolean type (true/false)
console.log(`a > b: ${5 > 3}`); // true
console.log(`a < b: ${5 < 3}`); // false
console.log(`a >= b: ${5 >= 3}`); // true
console.log(`a <= b: ${20 <= 20}`); // true

console.log(`Bob > Oleg: ${'Bob' > 'O'}`); // false
console.log(`Bob > Bobich: ${'Bob' > 'Bobich'}`); // false

// weak - convert values to common type and check
console.log(`a == b: ${'5' == 5}`); // true
console.log(`a != b: ${'5' != 5}`); // false
// strict - compare types also
console.log(`a === b: ${'5' === 5}`);   // false
console.log(`a !== b: ${'5' !== 5}`);   // true

// falsy values: false, 0, null, undefined, "", '', NaN
console.log(`null == undefined: ${null == undefined}`);   // true
console.log(`null === undefined: ${null === undefined}`); // false

let value = "false";

if (value) {
    console.log("This is truthy value");
} else {
    console.log("This is falsy value");
}

let salary = 1300, bonus = 80;

console.log("Bonus:", bonus); // 80

console.log(salary + 10); // 1310
console.log(salary);      // 1300

// salary = 1300

// salary = salary + bonus;
// ------------- change operators: += -= *= /= %=
salary += bonus;

salary = salary + 1;
salary += 1;
salary++;
salary--;
// ------------- increment / decrement operators: ++ --
// 1 - prefix: ++value (high priority)
// 2 - postfix: value++ (low priority)

salary = 2000;
console.log("Original Salary: ", salary); // 2000

let result = (2 + 2) * 2; // 8
let copy = ++salary;

console.log("Salary: ", salary); // 2001
console.log("Copy: ", copy); // 2000

// ------------- type conversion
let invalidNumber = NaN;

// to boolean: Boolean(value) !!value

salary = 10;

console.log("Salary as bool:", Boolean(salary)); // true
console.log("Salary as bool:", !!salary);       // true

console.log("NaN as bool:", !!NaN);
console.log("Boolean of NaN: ", Boolean(NaN) === false); // true

if (invalidNumber) console.log("True");
else console.log("False");

// to number: +value Number(value)
//let number = +"123";
let number = Number("354");

console.log(number); // 354
console.log(isNaN(number));
console.log("Type of variable:", typeof (number));

// isNaN - convert value to number type and check if it's equals to NaN
console.log("isNaN: ", isNaN('hello'));          // true

// Number.isNaN - only check if it's equals to NaN
console.log("Number.isNaN: ", Number.isNaN("hello")); // false

// to integer: parseInt(value)
// to real: parseFloat(value)
console.log(parseInt("34.99%")); // 34
console.log(parseFloat("34.99UAH")); // 34.99

console.log("Red" + "Green");

console.log("34" + 1);      // "341"
console.log("34" + false);  // "34false"
console.log("10" - 3);      // 7
console.log("vlad" - 1);    // NaN
console.log("5" * 2);       // 10

// ------------- Math
Math.round(2.5);    // 3
Math.floor(2.9);    // 2
Math.ceil(2.1);     // 3
Math.random();      // return random value [0...1) - 0.56486738, 0...0.999999999

Math.floor(Math.random() * 100);
