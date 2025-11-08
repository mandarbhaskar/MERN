const fs = require('fs');
const path = require('path');

const sourceDir = './read_stream';
const destDir = './write_stream';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('Created directory:', destDir);
}

const sourceFile = path.join(sourceDir, 'example.txt');
const destFile = path.join(destDir, 'output.txt');

const readStream = fs.createReadStream(sourceFile);
const writeStream = fs.createWriteStream(destFile);

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('File copied successfully using pipe!');
});

readStream.on('error', (err) => console.error('Read Error:', err));
writeStream.on('error', (err) => console.error('Write Error:', err));
