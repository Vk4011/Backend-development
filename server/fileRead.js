const fs = require("fs");

fs.readFile("a.txt","utf-8",fileRead);

function fileRead(err,data){
    console.log(data);

}

function fn(){
    console.log("\n\t life is learning.....");
}

setInterval(fn,1000)