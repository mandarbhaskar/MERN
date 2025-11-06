const fs = require("fs");

console.log("Start of program");

try {
    fs.writeFileSync("sync.txt", "Synchronous file handling!");
    console.log("File written (sync)");

    const data = fs.readFileSync("sync.txt", "utf8");
    console.log("File content (sync):", data);
} catch (err) {
    console.error("Error:", err);
}

console.log("End of program");