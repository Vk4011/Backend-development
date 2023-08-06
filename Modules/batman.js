const SuperHero = require("./caching");

const batman = new SuperHero("Batman")


console.log(batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());


const SuperHero = new batman("super man")
console.log(SuperHero.getName());
