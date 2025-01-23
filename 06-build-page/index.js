const fs = require('fs')
const path = require('path')

const pathToDist = path.join(__dirname, 'project-dist')
// console.log(pathToDist);
const pathToHtml = path.join(__dirname, 'template.html')
// console.log(pathToHtml);

fs.mkdir(pathToDist, (e) => {
  if (e) console.error(e);
  console.log(`result dir created`);
})
fs.writeFile(path.join(pathToDist, 'index.html'), '', (e) => {
  if (e) console.error(e);
})

function readComponentsFile(component) {
  const pathToComponents = path.join(__dirname, 'components', `${component}.html`)
  // fs.readFile(pathToComponents, 'utf-8', (e, data) => {
  //   if (e) console.error(e);
  //   console.log(data);
  // })
  return `the component from ${pathToComponents} here`
}

// fs.readFile(pathToHtml, 'utf-8', (err, data) => {
//   if (err) console.error(err);
//   const updated = data.split('\n')
//   // console.log(updated);
//   for (const string of updated) {
//     // if (string.match(/{{\w+}}/g)) {
//     //   let component = string.match(/{{\w+}}/g)[0].match(/\w+/g).toString();
//     //   // console.log(readComponentsFile(component));
//     // }
//     fs.appendFile(path.join(pathToDist, 'index.html'), updated, (e) => {
//       if (e) console.error(e);
//       // console.log(`file index.html created`);
//     })
//   }
// })

// const stream = fs.createReadStream(pathToHtml, {encoding: 'utf-8'})
// stream.on('data', chunk => console.log(chunk))
