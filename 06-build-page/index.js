const fs = require('fs')
const path = require('path')

const pathToDist = path.join(__dirname, 'project-dist')
// console.log(pathToDist);
const pathToHtml = path.join(__dirname, 'template.html')
// console.log(pathToHtml);

fs.readFile(pathToHtml, 'utf-8', (err, data) => {
  if (err) console.error(err);
  const updated = data.split('\n')
  // console.log(updated);
  for (const string of updated) {
    if (string.match(/\{\{.*?\}\}/g)) {
      console.log(string);
    }
  }
  // console.log(updated.match(/\{\{.*?\}\}/g));
})

// const stream = fs.createReadStream(pathToHtml, {encoding: 'utf-8'})
// stream.on('data', chunk => console.log(chunk))