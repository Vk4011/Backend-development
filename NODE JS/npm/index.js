const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('\n\t Server started')
    res.setHeader('Dummy','')
    res.end('<h1>hello</h1>');
})

server.listen(8080)