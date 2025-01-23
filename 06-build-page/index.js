const fs = require('fs')
const path = require('path')

const pathToDist = path.join(__dirname, 'project-dist')
console.log(pathToDist);
const pathToHtml = path.join(__dirname, 'template.html')
console.log(pathToHtml);

function readComponentsFile(component) {
  const pathToComponents = path.join(__dirname, 'components', `${component}.html`)
  return pathToComponents
}

fs.readFile(pathToHtml, 'utf-8', (err, data) => {
  if (err) console.error(err);
  const updated = data.split('\n')
  // console.log(updated);
  for (const string of updated) {
    if (string.match(/{{\w+}}/g)) {
      let component = string.match(/{{\w+}}/g)[0].match(/\w+/g).toString();
      console.log(readComponentsFile(component));
    }
  }
})

// const stream = fs.createReadStream(pathToHtml, {encoding: 'utf-8'})
// stream.on('data', chunk => console.log(chunk))

// console.log(readComponentsFile('footer'));