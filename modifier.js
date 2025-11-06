import React, { useState } from 'react'; 
function App() { 
const [age, setAge] = useState(20); 
const [name, setName] = useState('Nidhish'); 
return ( 
<div> 
<h1>Name: {name}, Age: {age}</h1> 
<button onClick={() => setAge(age + 1)}>Increment Age</button> 
<button onClick={() => setName('Jane')}>Change Name</button> 
</div> 
); 
} 
export default App; 