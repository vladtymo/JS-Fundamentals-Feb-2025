const _ = require('lodash');

let obj1 = ([6.1, 4.2, 6.3, 5, 7.9, 5.3, 5.1, 7.3]);

// Use of _.countBy() method
let y = _.countBy(obj1, Math.floor);

// Printing the output 
console.log(y);

let users = [
    {
        'user': 'luv',
        'salary': 36000,
        'active': true
    },
    {
        'user': 'aergare',
        'salary': 36000,
        'active': true
    },
    {
        address: "aergrae",
        'user': 'aergera',
        'salary': 36000,
        'active': true
    },
    {
        'user': 'kush',
        'salary': 40000,
        'active': false
    }
];

// Using the _.filter() method
// The `_.matches` iteratee shorthand
let filtered_array = _.filter(users,
    { 'salary': 36000, 'active': true }
);

// Printing the output 
console.log(filtered_array);