
const fs=require("fs");

setTimeout(()=>console.log("\n\t This is setTimeout 1 \n"),0);

fs.readFile(__filename,()=>{
    console.log("\n\t This is readFile 1\n");
})

