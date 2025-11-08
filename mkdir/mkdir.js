const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createDirectory() {
    rl.question("Enter directory name to create: ", (dirName) => {
        fs.mkdir(dirName, { recursive: true }, (err) => {
            if (err) console.log("Error creating directory:", err);
            else console.log("Directory created successfully!");
            mainMenu();
        });
    });
}

function readDirectory() {
    rl.question("Enter directory name to read: ", (dirName) => {
        fs.readdir(dirName, (err, files) => {
            if (err) console.log("Error reading directory:", err);
            else console.log("Files:", files);
            mainMenu();
        });
    });
}

function checkIfDirectory() {
    rl.question("Enter path to check: ", (dirName) => {
        fs.stat(dirName, (err, stats) => {
            if (err) console.log("Error:", err);
            else if (stats.isDirectory()) console.log("It is a directory!");
            else console.log("It is NOT a directory!");
            mainMenu();
        });
    });
}

function renameDirectory() {
    rl.question("Enter current directory name: ", (oldName) => {
        rl.question("Enter new directory name: ", (newName) => {
            fs.rename(oldName, newName, (err) => {
                if (err) console.log("Error renaming directory:", err);
                else console.log("Directory renamed successfully!");
                mainMenu();
            });
        });
    });
}

function deleteDirectory() {
    rl.question("Enter directory name to delete: ", (dirName) => {
        fs.rm(dirName, { recursive: true, force: true }, (err) => {
            if (err) console.log("Error deleting directory:", err);
            else console.log("Directory deleted successfully!");
            mainMenu();
        });
    });
}

function watchDirectory() {
    rl.question("Enter directory name to watch: ", (dirName) => {
        if (!fs.existsSync(dirName)) {
            console.log("Directory does not exist!");
            return mainMenu();
        }
        console.log(`Watching for changes in ${dirName}... (Press Ctrl+C to stop watching)`);
        fs.watch(dirName, (eventType, filename) => {
            console.log(`Change detected: ${eventType} on ${filename}`);
        });
    });
}

function checkIfExists() {
    rl.question("Enter directory name to check: ", (dirName) => {
        if (fs.existsSync(dirName)) {
            console.log("Directory exists!");
        } else {
            console.log("Directory not found!");
        }
        mainMenu();
    });
}

function readWithDetails() {
    rl.question("Enter directory name to read details: ", (dirName) => {
        fs.readdir(dirName, { withFileTypes: true }, (err, files) => {
            if (err) console.log("Error reading directory:", err);
            else {
                files.forEach(file => {
                    console.log(file.name, file.isDirectory() ? '(dir)' : '(file)');
                });
            }
            mainMenu();
        });
    });
}

function mainMenu() {
    console.log("\nDIRECTORY OPERATIONS MENU ");
    console.log("1. Create Directory");
    console.log("2. Read Directory");
    console.log("3. Check if Path is Directory");
    console.log("4. Rename Directory");
    console.log("5. Delete Directory");
    console.log("6. Watch Directory");
    console.log("7. Check if Directory Exists");
    console.log("8. Read Directory with Details");
    console.log("9. Exit");

    rl.question("\nChoose an option (1-9): ", (choice) => {
        switch (choice) {
            case '1': createDirectory(); break;
            case '2': readDirectory(); break;
            case '3': checkIfDirectory(); break;
            case '4': renameDirectory(); break;
            case '5': deleteDirectory(); break;
            case '6': watchDirectory(); break;
            case '7': checkIfExists(); break;
            case '8': readWithDetails(); break;
            case '9': 
                console.log("Exiting program...");
                rl.close();
                break;
            default:
                console.log("Invalid choice! Try again.");
                mainMenu();
        }
    });
}
mainMenu();
