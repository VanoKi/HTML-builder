const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'files');
const dstDir = path.join(__dirname, 'files-copy');

function copyFile(src, dst, file) {
  fs.copyFile(path.join(src, file.name), path.join(dst, file.name), err => {
    if (err) throw err;
  });
  console.log(`${file.name} copied`);
}
function copyAll(src, dst) {
  fs.mkdir(dst, (err) => {
    if (err) throw err;
  });
  fs.readdir(src, {withFileTypes: true}, (err, files) => {
    files.forEach(file => {
      if (file.isFile()) {
        copyFile(src, dst, file);
      } else {
        copyAll(path.join(src, file.name), path.join(dst, file.name));
      }
    });
  });
}
fs.access(dstDir, (err) => {
  if (err) {
    copyAll(srcDir, dstDir);
  } else {
    fs.rmdir(dstDir, {force: true, recursive:true}, function (err) {
      if (err) throw err;
      copyAll(srcDir, dstDir);
    });
  }
});