const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const stdout = process.stdout;
fs.createWriteStream(path.join(__dirname, 'text.txt'));

const write = () => {
  stdout.write('Hello, leave me your good wishes!\n');
  rl.on('line', (text) => {
    if (text.trim() == 'exit') {
      console.log('Thanks, bye');
      process.exit();
    }
    fs.appendFile(path.join(__dirname, 'text.txt'), text + '\n', (err) => {
      if (err) return;
    });
  });
};

write();

rl.on('SIGINT', () => {
  console.log('Thanks, bye');
  process.exit();
});