const fs = require('fs').promises
const path = require('path')

const distPath = path.join(__dirname, 'project-dist')

fs.mkdir(distPath, {recursive: true}, (err) => {
  if (err) console.error(err);
})

const templatePath = path.join(__dirname, 'template.html')
let templateContent = ''

fs.readFile(templatePath, 'utf-8', (err, data) => {
  if (err) console.error(err);
  templateContent = data
  processTemplate()
})

const componentsPath = path.join(__dirname, 'components')
const processTemplate = () => {
  const tagRegex = /{{\s*([\w-]+)\s*}}/g
  let match
  while ((match = tagRegex.exec(templateContent)) !== null) {
  const tagName = match[1];
  const componentPath = path.join(componentsPath, `${tagName}.html`);
  fs.readFile(componentPath, 'utf-8', (err, componentContent) => {
    if (err) console.error(err);
    templateContent = templateContent.replace(match[0], componentContent)
    fs.writeFile(path.join(distPath, 'index.html', templateContent, (err) => {
      if (err) console.error(err);
    }
  })
  })
}