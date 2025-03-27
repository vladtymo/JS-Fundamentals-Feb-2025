// load module: require(module_name)
require("./first");

const utils = require('./examples/utils');

function welcome(name) {
    console.log(`----- ${global.title} -----`);
    console.log("Hello, ", name);
}

welcome("Vlad");

console.log("Test title: ", title);

utils.showMessage("tymovlad");
utils.showMessage(); // username
console.log(utils.user);
