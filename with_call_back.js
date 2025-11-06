const fs = require("fs");

console.log("Start of program");

fs.writeFile("async.txt", "Asynchronous file handling!", (err) => {
    if (err) return console.error("Error writing file:", err);
    console.log("File written (async)");

    fs.readFile("async.txt", "utf8", (err, data) => {
        if (err) return console.error("Error reading file:", err);
        console.log("File content (async):", data);
    });
});

console.log("End of program");