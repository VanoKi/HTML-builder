const fs = require('fs')
const path = require('path')
const { read } = require("fs");

const pathToDist = path.join(__dirname, 'project-dist')
const pathToHtml = path.join(__dirname, 'template.html')
const pathToIndex = path.join(pathToDist, 'index.html')

fs.mkdir(pathToDist, {recursive:true},(e) => {
  if (e) console.error(e);
  console.log(`result dir created`);
})
fs.writeFile(pathToIndex, '', (e) => {
  if (e) console.error(e);
  console.log(`file index.html created`);
  processTemplate()
})

async function readComponentsFile(component) {
  const pathToComponents = path.join(__dirname, 'components', `${component}.html`)
  try {
    const data = await fs.promises.readFile(pathToComponents, 'utf-8')
    return data
  } catch (e) {
    console.error(e);
    return ''
  }
}

// readComponentsFile('footer').then(data => {
//   console.log(data);
// })

async function processTemplate() {
  try {
    const data = await fs.promises.readFile(pathToHtml, 'utf-8')
    const lines = data.split('\n')
    for (const line of lines) {
      if (line.includes('{{')) {
        const match = line.match(/{{\w+}}/)
        if (match) {
          const componentName = match[0].slice(2, -2)
          const componentContent = await readComponentsFile(componentName)
          await fs.promises.appendFile(pathToIndex, componentContent + '\n')
        }
      } else {
        await fs.promises.appendFile(pathToIndex, line + '\n')
      }
    }
    console.log(`data added to index.html`);
  } catch (e) {
    console.error(e);
  }
}

// processTemplate().then(data => {
//   console.log(data);
// })

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

async function copyDir(source, destination) {
  try {
    await fs.promises.mkdir(destination, {recursive: true})
    const entries = await fs.promises.readdir(source, {withFileTypes: true})
    for (const entry of entries) {
      const sourcePath = path.join(source, entry.name)
      const destinationPath = path.join(destination, entry.name)
      if (entry.isDirectory()) {
        await copyDir(sourcePath, destinationPath)
      } else if (entry.isFile()) {
        await fs.promises.copyFile(sourcePath, destinationPath)
      }
    }
    console.log(`files copied`);
  } catch (e) {
    console.error(e);
  }
}

copyDir(path.join(__dirname, 'assets'), path.join(pathToDist, 'assets'))

const dirPath = path.join(__dirname, 'styles')
const outputFile = path.join(__dirname, 'project-dist', 'style.css')
// console.log(outputFile);
async function mergeCss() {
  const files = await fs.promises.readdir(dirPath)
  const cssFiles = files.filter(file => path.extname(file) === '.css')
  await fs.promises.writeFile(outputFile, '', 'utf-8')
  for (const cssFile of cssFiles) {
    const filePath = path.join(dirPath, cssFile)
    const styles = await fs.promises.readFile(filePath, 'utf-8')
    await fs.promises.appendFile(outputFile, `/* ${cssFile} */\n${styles}\n`, 'utf-8')
  }
}

mergeCss()