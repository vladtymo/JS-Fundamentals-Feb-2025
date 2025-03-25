const btn = document.querySelector('#testBtn');
const textBlock = document.querySelector('#textBlock');
const userP = document.querySelector('#user');

btn.onclick = () => {
    textBlock.innerHTML += `<span>*</span>`;
}

// -=-=-=-=-=-=-=- Callbacks -=-=-=-=-=-=-=-
console.log("Before process!");

// setTimeout(() => {
//     let result = 1;
//     for (let i = 1; i <= 6; i++) {
//         result *= i;
//     }
//     console.log("Factorial of 6 = ", result);

//     setTimeout(() => {
//         console.log("Pow: ", Math.pow(2, 16)); // 3 sec
//     }, 1000);
// }, 2000);       // 2 sec

// console.log("Finish! App is continue working...");

// ---------- Promise
// create syntax: new Promise((resolve, reject) => { work });
// create and automatically start the Promise

// Promise states: pending -> fullfiled/rejected

// create the promise that return 4^8
// const hardWork = new Promise((resolve, reject) => {
//     // do work...

//     console.log("Start doing hard work...");
//     if (Math.random() < 0.5) // 50%
//         reject(new Error("Something went wrong!")); // error
//     else {
//         setTimeout(() => {
//             const result = Math.pow(4, 8);
//             console.log('Hard work is done!');
//             resolve(result); // success result
//         }, 1000);
//     }
// });

// handle hardWork promise
// hardWork
//     .then((res) => console.log("Promise was successfully finished!" + " - " + res)) // on fullfiled
//     .catch((err) => console.warn(err.message))                                      // on rejected

// create the promise that grenerate users and return them
// const getUsers = new Promise((res, rej) => {

//     if (Math.random() < 0.3)
//         rej(new Error("Something went wrong with user generation!"));

//     // create user array
//     const users = [];
//     for (let i = 0; i < 1000000; i++) {
//         users.push({ id: 1000 + i, name: `Test${i}` });
//     }

//     res(users);
// });

// -------- .then() - handling the promise result
// Promise states: pending -> fullfiled / rejected

// handle getUsers promise
// getUsers.then((users) => {
//     console.log("Users generated succesfully");
//     console.log(users);
// }).catch((err) => {
//     console.warn(err.message);
// });

// TASK: get data from the database asynchronously
function getActiveUser(ip) {
    return new Promise((res, rej) => {
        if (ip === '198.0.0.3')
            setTimeout(() => {
                b = 30;
                res({ id: 1002, login: 'vlad ' });
                console.log("end!");
            }, 1000);
        else
            rej(new Error("Invalid IP address!"));
    });
};

const ip = "198.0.0.3"; // prompt("Enter IP:");

// getActiveUser(ip)
//     .then(res => {
//         console.log("Active user:", res);
//         // async work
//         return getActiveUser("0.0.0.0");
//     })
//     .then((res) => console.log(res))
//     .catch(err => console.log(err.message));

// ------------ Promise methods
// Promise.all([hardWork, getUsers]).then((values) => {
//     console.log("All promises have done!");
// }).catch((err) => console.log(err));

// Promise.race([hardWork, getUsers]).then((values) => {
//     console.log("Any promise has done!");
// }).catch((err) => console.log(err));

// ------- fetch()
const res = fetch("https://jsonplaceholder.typicode.com/users");

res.then((res) => {
    // on fullfiled:
    console.log(res.status);
    return res.json();
}).then(data => console.log(data));

console.log("Finish");

// ------------- [async] & [await] -------------
// introduced in ES8
// [await] - wait the promise asynhronously
// [async] - allows to use await operator in function 

async function showActiveUser() {
    // getActiveUser("198.0.0.3")
    //     .then((user) => {
    //         console.log(user);
    //         userP.innerHTML = `Active user: ${user.login}`;
    //     });

    const user = await getActiveUser("198.0.0.3");

    // ... continue when the promise is finished

    console.log(user);
    document.body.innerHTML += `<p>Active user: ${user.login}</p>`;
}

showActiveUser();

// use await with IIFE
// (async function () {
//     console.log("IIFE:", await getActiveUser("198.0.0.3"));
// }());

// TASK: get users from the server
async function showUsers() {

    // 1 - handle with .then()
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => {
    //         console.log(response);
    //         console.log(response.status);
    //         return response.json();
    //     })
    //     .then(users => console.log(users));

    // 2 - handle with [await]
    const response = await fetch("https://dummyjson.com/comments");
    console.log(response.status);

    const data = await response.json();
    console.log("async/await:", data);
    document.body.innerHTML += `<p>Comment: ${data.comments[0].body}</p>`;
}

showUsers();

//... continue ...
console.log("------ The end! Continue -------");
