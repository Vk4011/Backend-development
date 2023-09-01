
// const localModule = require("./path-to-module");
// const fs = require("node:fs")

const upperCase = require("upper-case").upperCase;
function greet(name){
    console.log(`Hello ${name},welcome to node js`);


}
greet("vikram");

module.exports = greet;
