const math = require("./exports")
console.log(math.add(2,3));
console.log(math.subtract(2,3));
console.log("\n\t After destruring")

//Destructuring

const {add,subtract} = math;
console.log(add(4,5));
console.log(subtract(5,4))