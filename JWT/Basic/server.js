const express= require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 4010;


app.listen(port,()=>console.log(`\n\t Server is running on the port ${port}`));


const value={
    name:"vikram",
    accountNumber : 1234772520
}

const token = jwt.sign(value,"secret");
console.log(`token : ${token}`);


