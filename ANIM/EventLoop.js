const fs=require("node:fs");

fs.readFile(__filename,()=>{
    console.log("\n\t This is readFile 1\n");
})

process.nextTick(()=>console.log("\n\t This process.nextTick 1\n"));
Promise.resolve().then(()=>console.log("\n\t This is promise.resolve() 1\n"));