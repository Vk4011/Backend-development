
function greet (name){
    console.log(`Hello ${name}`);

}

function vikram(greetFn){
    const name = "Mark";
    greetFn(name);
}

vikram(greet);


//Function passing arguments to another function is called call back functions
