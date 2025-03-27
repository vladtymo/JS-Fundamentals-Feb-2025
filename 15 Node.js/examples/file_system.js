// require('module_name') - import module

const fs = require('fs');

const text = "Blabla text... Hello file system built-in module in Node.js!";

fs.writeFile("data/test.txt", text, (err) => {
    if (err)
        console.warn(err.message);
    else
        console.log("Content was written successfuly!");
});

fs.readFile("data/test.txt", "utf8", (err, data) => {
    if (err)
        console.warn(err.message);
    else
        console.log("File content:", data);
});
