const fs = require('fs')
const express = require('express');
const { create } = require('domain');
const port = process.env.PORT || 3000
const app = express();
app.get("/route1",fn);
app.post("/user",createUser)

app.listen(port,()=>console.log('\n\t', `server started ${port}`))

function fn(req,res){
    var n=req.query.n;
    var calculated=sum(n);
    res.send("\n\t Server is running sucessfull : sum :" +calculated);
    console.log("sum is :",calculated);
    
}


function createUser(){
    console.log("\n\t Hello User is created ");
}

function sum(n){
        var s=0;
        for(var i=0;i<=n;i++){
            s=s+i;
        }
        return s;
}
var calculated=sum(99);
console.log(calculated);