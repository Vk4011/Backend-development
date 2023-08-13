const PizzaShop =  require("./PizzaShop.mjs");
const pizaa = new PizzaShop();
pizaa.on("order", (size,topping)=>{
    console.log("\n\t,"`Order recevied Baking a ${size} pizaa with ${topping}`);

})
pizaa,order("large","Chesse");
pizaa.displayOrderNumber();
