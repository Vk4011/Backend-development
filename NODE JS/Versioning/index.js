

console.log("\n\t Global packages ...")

function sum( a,b){
    console.log("\n\t\tNodemon....\n");
    return a+b;
}
var ans=sum(9,10);
console.log("\n\t Using Nodemon to run sum : "+ans);
let r=sum(89,100);
console.log("\n\t it will restart js file automatically  sum :"+r);


console.log("\n\t Npm Scripts ")

//npm scripts are executed using the command npm run <SCRIPT_NAME>


//"scripts:"{
// "start":"nodemon index.js"
// }

//npm run vikram