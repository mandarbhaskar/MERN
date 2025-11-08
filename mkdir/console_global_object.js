console.log("Normal log message");
console.info("Informational message");
console.warn("Warning message");
console.error("Error message");

console.time("timerExample");

for (let i = 0; i < 1e6; i++) { }

console.timeEnd("timerExample");

console.table([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
]);