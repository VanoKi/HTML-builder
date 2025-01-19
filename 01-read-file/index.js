const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'text.txt')
// console.log(filePath);
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) console.error(err)
  else console.log(data)
})