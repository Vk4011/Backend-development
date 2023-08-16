
const fs = require("node:fs");


const fileContents= fs.readFileSync("./file.txt");
console.log(fileContents)

fs.readFile("./file.txt","utf-8",(error,data)=>{
    if(error){
    console.log(error);
    }
    else{
        console.log(data);
    }
})
console.log("Third")

fs.writeFileSync("./greet.txt"," Hello Mark 42..!");

fs.writeFileSync("./greet.txt"," Hello Tony Stank....!",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file Written");
    }
});

