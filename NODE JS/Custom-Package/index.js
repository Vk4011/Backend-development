
// const localModule = require("./path-to-module");

const upperCase = require("upper-case").upperCase;



function greet(name) {
    console.log(upperCase(`Hello ${name}, welcome to NodeJS`));

}

greet("vikam");

module.exports = greet;

