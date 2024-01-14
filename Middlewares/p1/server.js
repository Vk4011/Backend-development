const express = require('express');
const app = express();


function isOldEnough(age){
    if(age>=14){
        return true;

    }else{
        return false;
    }
}



app.get("/ride1",(req,res)=>{
    
    if(isOldEnough(req.query.age)){
        console.log(req.query.age);
        res.json({
            msg: "you have sucessfully riden the ride 1"
        })
    }else{
        res.status(411).json({
            msg: " Soory you are not of age yet "
        })
    }
    
})

app.get("/ride2",(req,res)=>{
    if(isOldEnough(req.query.age)){
        res.json({
            msg: " You haved sucessfully riden the ride 2",
        })
    }else{
        res.status(411).json({
            msg: "Sorry you are not of age yet ",
        })
    }
})



function ticketCheckerMiddleware(req,res,next){
    const age=req.query.a;
    console.log(`\n\t age : ${age}`);
    if(age >= 14){
        next();
    }else{
        res.json({
            error : " You are not old enough to use the service "
        })
    }
}

app.get("/ride",ticketCheckerMiddleware,(req,res)=>{
    res.json({
        msg: "you have sucessfully completed the ride ...!",
    })
})


const port = 4040;
app.listen(port,()=>console.log(`\n\t server is running on the port : ${port}`))