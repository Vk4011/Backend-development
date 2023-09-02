
const cluster = require("node:cluster")

if(cluster.isMaster){
    console.log(`MAster process ${process.pid} is runnig`);
}else{
    console.log(`Worker ${process.pid} started`);
}