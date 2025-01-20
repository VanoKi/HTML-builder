const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname,'userInput.txt')
const writeStream = fs.createWriteStream(filePath)
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
  process.exit(0)
})
process.on('exit', () => {
  process.stdout.write('\n' + farewell)
  }
)

