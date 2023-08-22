const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req,res)=>{
    // const name = "Vikram";
    // let html=fs.readFileSync("./index.html","utf-8");
    // html= html.replace("{{name}}",name);
    // res.end(html);
    // res.end(req.url);

    if(req.url === "/"){
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.end("Home Page");
    }else if (req.url === "/about"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end("About Page");
    }   
        else if(req.url === "/api"){
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify({
            firstName : "Bruce",
            lastName: "Wayne"
        }))
    }else{
        res.writeHead(404);
        res.end("Page not found");
    }
})

server.listen(4000,()=>{
    console.log("\n\t Server is Running..!\n");
})