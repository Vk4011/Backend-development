
const EventEmitter = require("node:events");
const { emit } = require("node:process");

const emitter = new EventEmitter()

emitter.on("order-pizza",(size,topping)=>{
    console.log(`order received ! Baking a ${size} pizza with ${topping}`);
});
emitter.on("order-pizza",(size)=>{
    if(size === "large"){
        console.log("\n\t Serving complimetary drink")
    }
})


console.log("\n\tDo work before event occurs in the system");
emitter.emit("order-pizza","large","mushroom")

