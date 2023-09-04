const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\n\t Factorial of number ");

let n;
let f = 1;

function fact() {
  for (let i = 1; i <= n; i++) {
    f = f * i;
  }
  console.log(`\n\t Factorial : ${f}`);
}

rl.question('\n\tEnter a number : ', (num) => {
  n = parseInt(num);
  fact();
  rl.close();
});
        //         output:


                
        //  Factorial of number

        //  Enter a number : 5
 
        //   Factorial : 120


        //