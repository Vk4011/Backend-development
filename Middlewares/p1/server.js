const express = require('express');
const app = express();


function isOldEnough(age){
    if(age>=14){
        return true;

    }else{
        return false;
    }
}



app.get("/ride",(req,res)=>{
    
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

const port = 4040;
app.listen(port,()=>console.log(`\n\t server is running on the port : ${port}`))