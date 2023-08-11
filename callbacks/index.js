
function greet (name){
    console.log(`Hello ${name}`);

}

function vikram(greetFn){
    const name = "Mark";
    greetFn(name);
}

vikram(greet);
