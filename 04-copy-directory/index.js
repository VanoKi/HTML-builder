const fs = require('fs').promises
const path = require('path')

const dirPath = path.join(__dirname, 'files')
const destination = `${dirPath}-copy`

async function copyDir() {
  try {
    const files = await fs.readdir(dirPath)
    await fs.mkdir(destination, {recursive: true})
    for (const file of files) {
      const sourceFile = path.join(dirPath, file)
      const destinationFile = path.join(destination, file);
      await fs.copyFile(sourceFile, destinationFile)
      console.log(`file ${file} copied`);
    }
  } catch (e) {
    console.error(e);
  }
}

copyDir()
