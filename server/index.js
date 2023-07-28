
const fs = require("fs");


function callbackFn(err,data){
    console.log(data);
}


fs.readFile("a.txt","utf-8",callbackFn);



function Sum(counter){
    var sum=0;
    for(i=0; i<=counter ; i++){
        sum = sum+i;
    }
    return sum;
}

var ans = Sum(100);
console.log("\n\t sum of n natural numbers",ans,"\n")