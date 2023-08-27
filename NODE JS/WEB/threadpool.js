
const fs = require("node:fs");
const crypto = require("node:crypto")

const MAX_CALLS = 4;

const start = Date.now();
for( let i=0; i<MAX_CALLS; i++){
    crypto.pbkdf2("password","salt",10000,512,"sha512",()=>{
        console.log(`hash: ${i+1}`,Date.now() -start);

    })
}

