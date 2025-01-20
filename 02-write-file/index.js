const fs = require('fs')
const writeStream = fs.createWriteStream('userInput.txt')
const farewell = 'input completed'
process.stdout.write('Please, enter the text: ')
process.stdin.setEncoding('utf-8')
process.stdin.on('data', (data) => {
  const input = data.toString().trim()
  if (input === 'exit') {
    writeStream.end()
    process.exit(0)
  }
  else writeStream.write(input + '\n')
})

process.on('SIGINT', () => {
  process.stdout.write(farewell)
  process.exit(0)
})
process.on('exit', () => {
  process.stdout.write(farewell)
  }
)

