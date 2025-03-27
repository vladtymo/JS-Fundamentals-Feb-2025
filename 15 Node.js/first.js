// JavaScript in Node.js

// BOM: window, document, prompt, alert, confirm, navigator

console.log("Hello Node.js!");

let a = 2024;
console.log("Next:", a + 1);

let title = "Title in Module Scope!";

// document.getElementById('#main-title');

global.title = "Title in Global Scope!";

// Steps to run server:
// 1. install Node.js: https://nodejs.org
// 2. run <npm i> to install dependencies (express)
// 3. run <node file_path> to start app