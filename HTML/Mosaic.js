
const http = require("node:http");

const server = http.createServer((req,res)=>{
    const superHero ={
        firstName : "Vikram",
        lastName : "Ram",
    }
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>Hello world</h1>");
})

server.listen(5000,()=>{
    console.log("\n\t Server running on port 5000 \n");
})