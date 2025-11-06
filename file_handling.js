const fs = require('fs');
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\nChoose an option:");
    console.log("1. Read\n2. Write\n3. Append\n4. Delete\n5. Rename\n6. Exit");

    rl.question("Enter your choice: ", function(choice) {
        let op = parseInt(choice);

        switch (op) {
            case 1:
                rl.question("Enter filename to read: ", function(fileName) {
                    fs.readFile(fileName, "utf-8", (err, data) => {
                        if (err) console.log("Error:", err);
                        else console.log("Data:", data);
                        menu();
                    });
                });
                break;

            case 2:
                rl.question("Enter filename: ", function(fileName) {
                    rl.question("Enter data: ", function(filedata) {
                        fs.writeFile(fileName, filedata, (err) => {
                            if (err) console.log("Error:", err);
                            else console.log("File written successfully");
                            menu();
                        });
                    });
                });
                break;

            case 3:
                rl.question("Enter filename to append: ", function(fileName) {
                    rl.question("Enter data: ", function(filedata) {
                        fs.appendFile(fileName, filedata, (err) => {
                            if (err) console.log("Error:", err);
                            else console.log("Data appended successfully");
                            menu();
                        });
                    });
                });
                break;

            case 4:
                rl.question("Enter filename to delete: ", function(fileName) {
                    fs.unlink(fileName, (err) => {
                        if (err) console.log("Error:", err);
                        else console.log("File deleted successfully");
                        menu();
                    });
                });
                break;

            case 5:
                rl.question("Enter filename to rename: ", function(fileName) {
                    rl.question("Enter new name: ", function(newName) {
                        fs.rename(fileName, newName, (err) => {
                            if (err) console.log("Error:", err);
                            else console.log("File renamed successfully");
                            menu();
                        });
                    });
                });
                break;
            
            case 6:
                console.log("Exiting program...");
                rl.close();
                break;   // ✅ prevents falling into default

            default:
                console.log("Invalid choice!");
                menu();
        }
    });
}

menu();
