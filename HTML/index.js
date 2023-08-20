
const http = require("node:http");
const fs=require("node:fs")
const server = http.createServer((req,res)=>{
    
    res.writeHead(200,{"Content-Type":"text/html"});
    const html = fs.readFileSync("./index.html","utf-8");
    res.end(html);
})

server.listen(4000,()=>{
    console.log("\n\t Server running on port 6000 \n");
})