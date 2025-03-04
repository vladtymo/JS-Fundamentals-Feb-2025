/* ------------------ Error types
    - syntax error (in interpretation stage)
    - runtime error (after interpretation, while execution)
    - logic error (while execution, defficult to catch)
*/

//console.log('Some syntax error';  // syntax error

let a = 0;
// console.log("Result:", a + b);    // runtime error
// a.sort();                         // runtime error

const password = prompt("Enter a password (minimum 6 characters):");

if (password.length > 6) {          // logic error
    console.log('Password is valid! Saving...');
}
else {
    console.warn('Password too short. Try again!');
}

// --------------- Debugging Methods
// 1 - using console

function getNumberFromKeyboard(name = 'number') {
    let value = prompt(`Enter ${name}:`);

    if (isNaN(value)) {
        console.error('User inputs invalid number!');
        return null;
    }
    return +value; // return number
}

const width = getNumberFromKeyboard('width');

// 2 - using validators / static code analysis tools

// 3 - use debugger tool
const prices = [23.5, 10, 120, 44.2];

let totalPrice = 0;
debugger; // breakpoint
for (let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
}

console.log(`Total price: ${totalPrice}$`);
