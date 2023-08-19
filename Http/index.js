
const http = require("node:http");


const server =  http.createServer((req,res)=>{
    
    const superHero = {
        firstName : "Bruce",
        lastName : "Hulk",
    }
    
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end(superHero);


})

server.listen(8080,()=>{
    console.log('Server runnig on port 3000')
});

