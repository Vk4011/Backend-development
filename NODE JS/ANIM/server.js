
const fs = require("fs");

fs.readFile(__filename,()=>{
    console.log("\n\t ReadFile 1 \n");
});

process.nextTick(()=>console.log("\n\t This is process.nextTick 1"));
Promise.resolve().then (()=>console.log("\n\t This is promise.resolve 1"));
setTimeout(()=>console.log("\n\t This is setTimeout 1"),0);

for (let i=0; i<2000000;i++){
    
}

