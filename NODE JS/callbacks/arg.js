
function greet(name){
    console.log(`Hello ${name}`);
}

function higherOrderFuntion(callback){
    const name  = "mark";
    callback(name);
}
higherOrderFuntion(greet);
