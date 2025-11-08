const fs = require('fs');

const writeStream = fs.createWriteStream('./write_stream');

writeStream.write('Hello, this is line 1.\n');
writeStream.write('This is line 2.\n');

writeStream.end('End of file.\n');

writeStream.on('finish', () => {
  console.log('Data written successfully.');
});

writeStream.on('error', (err) => {
  console.error('Error:', err);
});
