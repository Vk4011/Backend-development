const express = require('express');
const app = express();
const port = 8000;
const fs = require("fs");

app.get("/",fn);


function fn(req,res){
        res.send("\n\t Welcome aliens to the earth");
}

app.listen(port,()=>console.log(`server is running on port : 8000 ${port}`))

