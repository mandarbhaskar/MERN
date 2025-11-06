const express = require('express'); 
const app = express(); 
app.use((req, res, next) => { 
console.log(Request received: ${req.method} ${req.url}); 
next(); // Continue to the next middleware or route handler 
}); 
app.get('/about', (req, res) => { 
res.send('This is the About page'); 
}); 
app.listen(3000, () => { 
console.log('Server running on port 3000'); 
}); 