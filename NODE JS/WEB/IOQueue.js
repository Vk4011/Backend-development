const fs = require("fs");

fs.readFile(__filename,()=>{
    console.log("\n\t This readFile 1");
    setImmediate(()=>console.log("\n\t This is inner setImmediate inside readFile"));
});


process.nextTick(()=>console.log("\n\t This is process.nextTick 1"));
Promise.resolve().then(()=>console.log("\n\t This is Promise.resolve 1"));
setTimeout(()=>console.log("\n\t This is setTimeout 1"),0);
setTimeout(()=>console.log("\n\t This is setImmediate 1"));



for(let i = 0 ; i < 20000000 ; i++){

}