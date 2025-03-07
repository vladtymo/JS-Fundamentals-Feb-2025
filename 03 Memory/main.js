// -=-=-=-=-=-=-=- Memory Management -=-=-=-=-=-=-=-
let title = document.querySelector('h1');
title.remove();

// remove title? - No

let number = 10; // memory allocation
let c = number;  // copy data

++number;       // 11
console.log(c); // 10

console.log(number);

let user = { id: 1001, login: 'super' }; // memory allocation [0x4667] -> {...}
let admin = user; // assign reference

user.id++;             // 1002
console.log(admin.id); // 1002

// memory usage...
number = Math.pow(number, 2);

// clear resources
// GC - Garbage Collector

//...... delete { id: 1001, login: 'super' } ? - No

if (true) {
    let msg = "Greather than 10";
    // remove "Greather than 10"? - No
    console.log(msg);
}

//console.log(msg); // cannot access msg
// remove "Greather than 10"? - Yes

number = null;
// remove 10? - Yes
console.log(number);

user = null;
// remove { id: 1001, login: 'super' }? - No

console.log(admin);
// remove { id: 1001, login: 'super' }? - No

admin = null;
// remove { id: 1001, login: 'super' }? - Yes

console.log(user);  // null
console.log(admin); // null
