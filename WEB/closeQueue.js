const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close",()=>{
    console.log("\n\t This is from readableStrean close event callback ");
});
setImmediate(()=>console.log("\n\t This is setImmediate 1"));
setImmediate(()=>console.log("\n\t This is setTimeout 1"),0);

Promise.resolve().then(()=>console.log("\n\t This is PRomise.resolve 1"));
process.nextTick(()=>console.log("\n\t This is process.nextTick 1"));


