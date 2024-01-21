const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb:");


connect.then(()=>{
    console.log("\n\t Database cannot be connected \n");
})

const  LoginSchema = new mongoose.Schema({
    name:{
        type: "String",
        required: true
    },
    password:{
        type: "String",
        required: true
    }
})

const collection = new  mongoose.model("users",LoginSchema);
module.exports = collection;
