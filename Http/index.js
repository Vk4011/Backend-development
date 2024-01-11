const express=require("express");
const app=express();
const port=4040;



const cs=function(req,res){
    res.send('Sucessfully http created Server is running ');
}

app.get("/",cs);

function start(){
    console.log(`\n\t Server is running on the port : ${port}`);
}

app.listen(port,start);


