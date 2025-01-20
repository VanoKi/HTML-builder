const fs = require('fs')
const path = require('path')

const filePath = 'userInput.txt'
const userInput = 'hello, vasya!'
fs.writeFile(filePath, userInput, (err) => {
  if (err) console.error(err);
  console.log('file created');
})
