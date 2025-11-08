setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(`⏳ Interval executed ${counter} times`);
  if (counter === 3) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);

setImmediate(() => {
  console.log("⚡ This runs immediately after the current event loop");
});
