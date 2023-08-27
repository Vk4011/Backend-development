// Asynchronous callbacks


// A callback that is often used to continue or resume code execution after an 
// asynchronous operation has completed
// callbacks are used to delay the execution of a function until a particular time or event has occured 


function callback(){
    document.getElementById("demo").innerHTML = " Hello World";

}
document.getElementById("btn").addEventListener("click",callback);
