const lib = require('./lib.js')

const fs = require('fs');

console.log(lib.sum(4,5),lib.diff(3,6))
const a=5;

const txt=fs.readFileSync('demo.txt')
console.log(txt);

