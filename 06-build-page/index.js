const fs = require('fs')
const path = require('path')

const pathToDist = path.join(__dirname, 'project-dist')
// console.log(pathToDist);
const pathToHtml = path.join(__dirname, 'template.html')
// console.log(pathToHtml);
fs.readFile(pathToHtml, 'utf-8', (err, data) => {
  if (err) console.error(err);
  console.log(data);
})
