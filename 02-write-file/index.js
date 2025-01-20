const fs = require('fs')
const path = require('path')

const filePath = 'userInput.txt'
// process.stdout.write('Please, enter the text: ')
// process.stdin.on('data', (data) => {
//   const userInput = data.toString().trim()
//   console.log(`you entered: ${userInput}`);
//   process.exit()
// })

// fs.writeFile(filePath, userInput, (err) => {
//   if (err) console.error(err);
//   console.log('file created');
// })

// console.log(process.env);
// console.log(process.env.Path);
console.log(process.cwd());
console.log(process.platform);
console.log(process.memoryUsage());
console.log(process.execPath);
console.log(process.pid);
console.log(process.ppid);
