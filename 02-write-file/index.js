const fs = require('fs')
const path = require('path')

const filePath = 'userInput.txt'
process.stdout.write('Please, enter the text: ')
process.stdin.setEncoding('utf-8')
process.stdin.on('data', (data) => {
  const input = data.toString().trim()
  console.log(`your entered: ${data}`);
  process.exit()
})

// fs.writeFile(filePath, userInput, (err) => {
//   if (err) console.error(err);
//   console.log('file created');
// }