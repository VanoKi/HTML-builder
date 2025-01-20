const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'secret-folder')
fs.readdir(dirPath, (err, files) => {
  files.forEach((file) => {
    // let name = path.parse(file).name
    let name = path.basename(file, path.extname(file))
    let ext = path.extname(file)
    const pathToFile = path.join(dirPath, file)
    // console.log(pathToFile);
    fs.stat(pathToFile, (err, stats) => {
      if (err) console.error(err);
      let size = (stats.size / 1024).toFixed(2);
      if (stats.isFile()) {
        console.log(`${name}-${ext.replace('.', '')}-${size}kb`);
      }
    })
  })
})