
const fs = require("node:fs");


const fileContents= fs.readFileSync("./file.txt");
console.log(fileContents)