 //let number = 12;
const readline1 = require("readline").createInterface({
    input: process.stdin,
    output:process.stdout
});
 readline1.question("Enter a number: ", (number) => {
 console.log("Prime factorization of a Number is");
for(var i = 2; i <= number; i++) {
    while(number%i == 0) {
        console.log(i+" ");
        number = number/i;
    }
    if(number < 2){
        console.log(number);
    }
   }
 });
