const http = require("http");

const localHost =  "192.168.56.1";
const port = 8040;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Hello server is started \n");
})

server.listen(port,localHost,function(){
    console.log(`\n\t  server is running on ${localHost}:${port}\n`);
})