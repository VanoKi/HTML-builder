const fs = require('fs').promises
const path = require('path')

const dirPath = path.join(__dirname, 'styles')
const outputFile = path.join(__dirname, 'project-dist', 'bundle.css')
// console.log(outputFile);