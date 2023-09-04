const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1;
let num2;
 function cal(a,b){
    const sum = a + b;
    console.log(`\n\t The sum of ${num1} and ${num2} is: ${sum}`+"\n");
    
 }

rl.question('\n\t Enter the first number: ', (n1) => {
  num1 = parseInt(n1);

  rl.question('\n\t Enter the second number: ', (n2) => {
    num2 = parseInt(n2);

    // Calculate the sum and display the result
    // const sum = num1 + num2;
    cal(num1,num2)
    // console.log(`\n\t The sum of ${num1} and ${num2} is: ${sum}`);
    
    rl.close();
  });
});




            // output 1:

            // Enter the first number  : 4

            // Enter the second number : 3
   
            // The sum of 4 and 3  is  : 7


            // output 2:

            // Enter the first number  : -5

            // Enter the second number : 6
   
            // The sum of -5 and 6  is  : 1  





            //