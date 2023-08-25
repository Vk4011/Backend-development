
process.nextTick(()=>console.log("\n\t This is process.nextTick 1"));
process.nextTick(()=>{
    console.log("\n\t This is process.nextTick 2");
    process.nextTick(()=>console.log("\n\t This is the inner next tick inside next tick"))
});
process.nextTick(()=>console.log("\n\t This is process.nextTick 3"));


Promise.resolve().then(()=>console.log("\n\t This is Promise.resolve 1 "));
Promise.resolve().then(()=>{
    console.log("\n\t This is Promise.resolve 2");
    process.nextTick(()=>
    console.log("\n\t This is the inner next tick inside Promise then block"))
})
Promise.resolve().then(()=>console.log("\n\t This is Promise.resolve 3"));

