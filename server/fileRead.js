const fs = require("fs");

fs.readFile("a.txt","utf-8",fileRead);

function fileRead(err,data){
    console.log(data);
    
}