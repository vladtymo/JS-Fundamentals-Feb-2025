// ----------------------- let / const -----------------------

// 1 - we can use before declaration
console.log(number); // undefined

var number = 10;
// 2 - we can recreate variable with the same name
var number = 20; // allow

//console.log(str); // error
let str = "hello ES6";
//let str = 'goodbye var'; // error

// 3 - [var] has function scope / [let] has block/local scope {...}
function TestScope() {

    console.log(varValue);   // undefined
    //console.log(letValue); // error

    if (4 > 2) {
        var varValue = 45;
        let letValue = 55;
    } // end of block

    console.log(varValue);   // 45
    //console.log(letValue); // error
}

TestScope();

// [var] as a loop variable
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(`Current i: ${i}`); // 10, 10, 10...
    }, 1000)
}

// [let] as a loop variable
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(`Current i: ${i}`); // 0, 1, 2, 3...
    }, 1000)
}

console.log(i);

console.log("Continue...");

const n = 5;

const koef = {
    low: 0.4,
    high: 2.5,
    inner: {
        x: 10
    }
};

// koef = {};
// koef = null;
koef.inner.x++;
koef.other = "hello";
// koef.change();

koef.low++;         // yes
koef.high = 105;    // yes
//koef = null;      // no

// prevent changing property values or addding new to the object
Object.freeze(koef);
// TODO: how it works inside

// ----------------------- destructuring -----------------------
// split [array] / [object] to a separate variables

let colors = ['white', 'black', 'blue', 'gray', 'yellow'];

// const light = colors[0];
// const dark = colors[1];
// const accent = colors[2];

const [light, dark, , , accent] = colors;

console.log("Light color:", light);
console.log("Dark color:", dark);
console.log("Accent color:", accent);

function getStudentMarks() {
    return [5, 6, 12, 10, 4, 3, 11];
}

const [firstMark, ...others] = getStudentMarks();
console.log("First student mark:", firstMark);
console.log("Others marks", others);

let rectangle = {
    height: 34.2,
    width: 10.5,
    name: "Black box",
    color: 'red'
    //...
};

// const w = rectangle.width;
// const h = rectangle.height;
// const name = rectangle.name;
const { name, width: w, height: h } = rectangle;

console.log(`${name} rectangle size: ${w}x${h}cm`);

// function parameter destructuring
function showArea({ width, height }, title) {
    // const { width, height } = rect;

    console.log(`----- ${title} -----`);
    console.log(`Area = ${width * height}cm^2`);
    console.log(`Perimeter = ${(width + height) * 2}cm`);
}

var door = {
    material: "Wood",
    width: 95,
    height: 230,
    color: "Brown",
    vendor: "BBC"
}

showArea(rectangle, "Rectangle info");
showArea(door, "Bedroom Door info");

// get first object property
for (const [key, value] of Object.entries(door)) {
    // arr[0] - name
    // arr[1] - value
    console.log(`Key: ${key} | Value: ${value}`);
}

function useState() {
    return ["hello", () => console.log("Func!")];
}

// destructuring React hook function
const [word, func] = useState();

console.log("Word = ", word);  // arr[0]
func();                        // arr[1]()

// ----------------------- spread -----------------------
// spread operator syntax: ...object/array

function showRange(min, max) {

    let result = '';
    for (let i = min; i <= max; ++i) {
        result += i + ' ';
    }
    console.log("Range:", result);
}

let numbers = [33, 44, 55];

showRange(...numbers); // numbers[0], numbers[0]

const arrayCopy = [...numbers]; // deep copy (copy each element)

numbers.push(123);
console.log("Copy arr:", arrayCopy);

let newArray = [-1, ...numbers, 6, 3];
console.log("Concatenated:", newArray);

let obj = {
    positives: [1, 2, 3],
    negatives: [-1, -4, -120]
};

let combinedArr = [...obj.positives, ...obj.negatives];
console.log("Combined Arr:", combinedArr);

let total = 0;

// create array copy with new item at the end
// pure function
function pushItem(arr, item) {
    return [...arr, item];
    // return [arr[0], arr[1], arr[n], item];
}

const larger = pushItem(numbers, 88);
console.log(larger);

// ---- ...spread with objects
const admin = {
    login: "super_user",
    password: "Qwerty",
    role: 'admin',
    email: 'temp@outlook.com'
};

let manager = {
    // login: admin.login,
    // password: admin.password,
    // role: admin.role,
    ...admin,
    email: 'new@gmail.com',     // overwrite email value
    address: 'Rivne, Ukraine',   // create new property
};

console.log(`Admin 2: ${manager.login}, ${manager.email}`);
console.log(Object.keys(manager));
console.log(Object.values(manager));

//  ----------------------- ...rest operator -----------------------
// ! we can use the rest operator only on the last parameter position
function showMarks(studentName, age, ...marks) {
    // arguments - function parameters
    console.log(`${studentName} ${age} years old has marks: ${marks}`);
}

showMarks('Bob', 16, 12, 8, 5, 6, 10, 6, 8);
console.log("Hello:", 10, true, [1, 2, 3]);

// ------------------ Symbol ------------------
const myId = Symbol("Vlad Tymo");
let yourId = Symbol("Vlad Tymo");

console.log("My = Your: ", myId == yourId); // false

yourId = myId;
console.log("My = Your: ", myId == yourId); // true

let order = {
    number: 120,
    total: 3500,
    client: "Bob Super",
    iterator: 4345,
    [myId]: "super-secret-key"
}

order.id;
order.myId;
order[Symbol("Vlad Tymo")];
order[myId]; // yes

console.log("Code: ", order.myId);                  // undefined
console.log("Code: ", order[Symbol("Vlad Tymo")]);  // undefined
console.log("Code: ", order[myId]);                 // value

// get iterator property
numbers.iterator;                           // my
let iterator = numbers[Symbol.iterator];    // system
console.log("Iterator:", iterator);

for (const element of numbers) {
    // element...
}
