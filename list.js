import React from 'react'; 
 
function App() { 
  const items = ['Apple', 'Banana', 'Cherry']; 
 
  return ( 
    <div> 
      <h1>Fruits</h1> 
      <ul> 
        {items.map((item, index) => ( 
          <li key={index}>{item}</li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 
 
export default App;