const os=require("os")

console.log("\n\t number of cpus : ",os.cpus().length);


console.log("\n\t Free Memory:", os.freemem());
console.log("\n\t Total Memory:", os.totalmem());

console.log("\n\t Platform:", os.platform());
console.log("\n\t Operating System Type:", os.type());


console.log("\n\t Network Interfaces:", os.networkInterfaces());
console.log("\n\t Hostname:", os.hostname());



// Get the network interfaces
const networkInterfaces = os.networkInterfaces();

// Extract the IPv4 address
let ipAddress;

for (const interfaceName in networkInterfaces) {
    const iface = networkInterfaces[interfaceName];

    for (let i = 0; i < iface.length; i++) {
        const alias = iface[i];

        if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
            ipAddress = alias.address;
        }
    }
}

if (ipAddress) {
    console.log("\n\t IP Address:", ipAddress);
} else {
    console.log("\n\t Unable to determine IP address");
}
