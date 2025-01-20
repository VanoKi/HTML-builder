const fs = require('fs')
const path = require('path')

const filePath = 'userInput.txt'
const writeStream = fs.createWriteStream(filePath)
process.stdout.write('Please, enter the text: ')
process.stdin.setEncoding('utf-8')
process.stdin.on('data', (data) => {
  const input = data.toString().trim()
  if (input === 'exit') process.exit()
  // fs.createWriteStream()
  else writeStream.write(input + '\n')
})

process.on('SIGINT', () => {
  process.exit()
})
process.on('exit', () => {
  process.stdout.write('input completed')
  }
)

