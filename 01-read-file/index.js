const fs = require('fs');
const path = require('path');

const readStream = new fs.ReadStream(path.resolve(__dirname, 'text.txt'), 'utf-8');

readStream.on('data', chunk => console.log(chunk));