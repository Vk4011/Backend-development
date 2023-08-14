const PizzaShop =  require("./PizzaShop.mjs");
const DrinkMachine= require("./Drink");


const pizaa = new PizzaShop();
const drinkMachine = new DrinkMachine();


pizaa.on("order", (size,topping)=>{
    console.log("\n\t,"`Order recevied Baking a ${size} pizaa with ${topping}`);
    drinkMachine.serverDrink(size);
})
pizaa,order("large","Chesse");
pizaa.displayOrderNumber();
