//Worker Threads Module

//The worker_threads module enables the use of threads that execute js in parllel 

const http = require("http");
const { Worker} =require ("node:worker_threads");


const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{
            "Content-Type": "text/plain"
        });
        res.end("Home page");
    }else if(req.url === "/slow-page"){
        const worker = new Worker("./worker-thread.js");
        worker.on("message",(j)=>{
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end(`Slow Page ${j}`);
        })
        let j=0;
        for(let i=0;i<600000000;i++){
            j++;
        }
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end(`Slow Page ${j}`);
    }
});

server.listen(4000,()=>console.log("\n\tServer is running on port 4000"));



