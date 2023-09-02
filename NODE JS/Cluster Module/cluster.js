
const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");


console.log(OS.cpus().length);

if(cluster.isMaster){
    console.log(`Master process ${process.pid} is runnig`);
    cluster.fork()
    cluster.fork()
}else{
    console.log(`Worker ${process.pid} started`);
    const server = http.createServer((req,res)=>{
        if(req.url === "/"){
            res.writeHead(200,{"content-Type":"text/plain"});
            res.end("Home page");
        }else if(req.url === "/slow-page"){
            for(let i =0; i<6000000000;i++){} //Simulate CPU work
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end("Slow Page");
        }
    })
}
server.listen(8000,()=>console.log("\n\t Server is running on port 8000"));
//create a large number of workers using cluster.fork()?
//we should only create as many workers as there are cpu cores on the machine the app is running

//if you create more workers than there are logical cores on the computer it can cause an overhead as the system will have to schedule all the created 
// Workers with fewer number of cores




//npm i -g pm2


//pm2 stop nocluster.js