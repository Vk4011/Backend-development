
const http = require("node:http");


const server =  http.createServer((req,res)=>{
    res.writeHead(200)
    res.end("Hello world!");


})

server.listen(3000,()=>{
    console.log('Server runnig on port 3000')
});
