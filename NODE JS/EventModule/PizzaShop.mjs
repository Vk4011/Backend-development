
const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.orderNumber = 0;
    }
    order(size,tooping){
        this.orderNumber++;
        this.emit("order",size,topping);
    }
    displayOrderNumber(){

    }

}
module.exports = PizzaShop;
