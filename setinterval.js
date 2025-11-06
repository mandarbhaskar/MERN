// timer.js 
setTimeout(() => { 
    console.log('This will run after 3 seconds'); 
    }, 3000); 
    let counter = 0; 
    const interval = setInterval(() => { 
    counter++; 
    console.log(`Interval count: ${counter}`); 
    if (counter === 5) { 
    clearInterval(interval); 
    console.log('Interval stopped'); 
    } 
    }, 1000);