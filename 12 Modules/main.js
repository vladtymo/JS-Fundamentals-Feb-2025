// ----------- modules -----------
// we can use items from different files (modules)
// keywords: [import] [export]

// we can [import] only exported items
import { id as num, getRandom, User } from './utils.js';
// import * as utils from './utils.js'

console.log("ID:", num);
//console.log("User:", user); // not imported
console.log(getRandom(1, 5));

const my = new User("blablauser");

my.print();

// Formatting: [Ctrl + K + F]
