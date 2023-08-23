const fs=require("node:fs");

console.log("\n\t First");

fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("\n\t File contents");
})

console.log("\n\t last");
