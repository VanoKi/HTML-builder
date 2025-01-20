const fs = require('fs').promises
const path = require('path')

const dirPath = path.join(__dirname, 'styles')
const outputFile = path.join(__dirname, 'project-dist', 'bundle.css')
// console.log(outputFile);
async function mergeCss() {
  const files = await fs.readdir(dirPath)
  const cssFiles = files.filter(file => path.extname(file) === '.css')
  await fs.writeFile(outputFile, '', 'utf-8')
  for (const cssFile of cssFiles) {
    const filePath = path.join(dirPath, cssFile)
    const styles = await fs.readFile(filePath, 'utf-8')
    await fs.appendFile(outputFile, `/* ${cssFile} */\n${styles}\n`, 'utf-8')
  }
}

mergeCss()