const os = require('os');

function showMessage(login) {
    console.log(`Hello, dear ${login ?? os.userInfo().username}`);
}

// not exported
function inner() {
    console.log(`Inner func!`);
}

module.exports.outer = function () {
    console.log(`Outer func!`);
}

let user = {
    id: 10,
    email: "bla@ukr.net"
};

module.exports = {
    showMessage,
    user
}