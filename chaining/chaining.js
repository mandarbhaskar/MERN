const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const sourceDir = './read_stream';
const destDir = './write_stream';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('Created directory:', destDir);
}


const sourceFile = path.join(sourceDir, 'example.txt');
const destFile = path.join(destDir, 'example.txt.gz');


const readStream = fs.createReadStream(sourceFile);
const gzip = zlib.createGzip(); 
const writeStream = fs.createWriteStream(destFile);

readStream
  .pipe(gzip)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('✅ File successfully compressed and saved to:', destFile);
  })
  .on('error', (err) => {
    console.error('❌ Error:', err);
  });