// --------------------------- working with API -------------

const usersApi = 'https://jsonplaceholder.typicode.com/users';
const cartsApi = 'https://dummyjson.com/carts';
const ourApi = 'http://localhost:4400/api/users';

// 1 ------------------ using XMLHttpRequets
const xhr = new XMLHttpRequest();

// xhr.open('GET', usersApi);
// xhr.send();

// Holds the status of the XMLHttpRequest.
//  - 0: request not initialized
//  - 1: server connection established
//  - 2: request received
//  - 3: processing request
//  - 4: request finished and response is ready

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         console.log("Response status:", xhr.status);

//         if (xhr.status == 200) {
//             const data = JSON.parse(xhr.responseText);
//             console.log("Result:", data);
//         }
//     }
// };

// 2 ------------------ using Fetch API
// .then() chain
// fetch(usersApi) // GET
//     .then(res => {
//         console.log("Response status:", res.status);

//         // res.text(); // convert response body to text
//         // res.json(); // convert response JSON data to object
//         return res.json();
//     })
//     .then(data => console.log("Result:", data));

// using [async] [await] keywords
async function getServerResult(url) {
    const res = await fetch(url); // GET

    console.log("Response status:", res.status);
    const data = await res.json();

    console.log("Result:", data);
}

getServerResult(ourApi);
getServerResult("http://localhost:4400/api/users/random");

// -------------- make POST request example
// use route parameters
fetch(`${ourApi}/vlad/tymo`, { method: 'POST' })
    .then(res => res.text())
    .then(text => console.log("Result:", text));

// use query parameters
fetch(`${ourApi}?name=bob&surname=riki`, { method: 'POST' })
    .then(res => res.text())
    .then(text => console.log("Result:", text));

console.log("Code continue working...");
