
const http = require("node:http");


const server =  http.createServer((req,res)=>{
    
    const superHero = {
        firstName : "Bruce",
        lastName : "Hulk",
    }
    
    res.writeHead(200,{"Content-Type":"application"});
    res.end(JSON.stringify(superHero));


})

server.listen(8080,()=>{
    console.log('Server runnig on port 8080')
});

