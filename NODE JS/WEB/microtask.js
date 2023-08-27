console.log("\n\tconsole.log 1");
process.nextTick(()=>console.log("\n\t This process.next 1 "))
console.log("\n\tconsole.log 2");



Promise.resolve().then(()=> console.log("\n\t This is Promise.resolve 1"));
process.nextTick(()=> console.log("\n\t This is process.nextTick 1"));


