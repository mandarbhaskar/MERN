const express = require('express'); 
const app = express(); 
const port = 3000; 
app.use(express.json()); 
let users = [ 
  { id: 1, name: 'Alice', age: 30 }, 
  { id: 2, name: 'Bob', age: 25 } 
]; 
app.get('/users', (req, res) => { 
  res.json(users); 
}); 
app.post('/users', (req, res) => { 
  const { name, age } = req.body; 
  if (!name || !age) { 
    return res.status(400).json({ message: 'Name and age are required' }); 
  } 
  const newUser = { 
    id: users.length + 1, 
    name, 
    age 
  }; 
users.push(newUser); 
res.status(201).json(newUser); // Send the created user as the response 
}); 
app.listen(port, () => { 
console.log(`Server running at http://localhost:${port}`); 
}); 