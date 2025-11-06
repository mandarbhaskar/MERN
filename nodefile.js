const fs = require('fs'); 
const http = require('http'); 
const server = http.createServer((req, res) => { 
fs.readFile('example.txt', 'utf8', (err, data) => { 
if (err) { 
res.writeHead(500, { 'Content-Type': 'text/plain' }); 
res.end('Error reading file'); 
} else { 
res.writeHead(200, { 'Content-Type': 'text/plain' }); 
res.end(data); 
} 
}); 
}); 
server.listen(3000, () => { 
console.log('Server running at http://localhost:3000/'); 
}); 