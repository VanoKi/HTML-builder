const fs = require('fs');
const promises = fs.promises;
const path = require('path');

const src = path.join(__dirname, 'styles\\');
const dst = path.join(__dirname, 'project-dist');

const writeStream = fs.createWriteStream(path.join(dst, 'bundle.css'));

let stylesArr = [];

function bundleCSS(styles) {
  writeStream.write(styles, 'utf-8');
  writeStream.end();
}

async function getStyles(src) {
  const srcFiles = await promises.readdir(src);

  for (const file of srcFiles) {
    if (path.parse(src + file).ext == '.css') {

      const stylesFileRead = await promises.readFile(src + file, 'utf8');

      stylesArr.push(stylesFileRead);
    }
  }

  bundleCSS(stylesArr.join(''));
}

getStyles(src);
