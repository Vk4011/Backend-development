// Synchronous callbacks 
// A callback which is executed immediately is called a synchronous callback

function greet(name){
    console.log(`hello ${name}`);
}
function higherOrderFuntion(callback){
    const name = "vikram";
    callback(name);
}
higherOrderFuntion(greet)

let numbers = [1,7,6,9,1,2,4,5]
numbers.sort((a,b)=>a-b)
numbers.filter(n=>n%2 === 0)
numbers.map(n => n/2)
console.log(numbers)