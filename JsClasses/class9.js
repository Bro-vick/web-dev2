/*
    Problem - Given a natural number 'n', determine if the number is prime or not
    A Prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
    
    isPrime(5) = true (1*5 or 5*1)
    isPrime(4) = false (1*4 or 2*2 or 4*1)
*/

function isPrime(n){
    if(n < 2) return false;
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return false; // Return statements terminates a function and returns a value.
        }
    };
    return true;
}

// Optimized Primalty test:  Integers larger than the square root do not need to be checked, whenever 'n=a*b' one of the two factors 'a' and 'b' is less than or equal to the square root of 'n' 

let optimizedIsPrime = function(n){
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return false; // Return statements terminates a function and returns a value.
        }
    };
    return true;
};
// let prime = prompt("Enter the number to be checked: ");
// console.log(isPrime(prime));
// console.log(optimizedIsPrime(prime));
console.log(optimizedIsPrime(13))
console.log(isPrime(13))

// Function Expression: This is another way to define a function, here we use a variable and store the returned value in that variable.

let sub = function(a, b){
    return a - b;
};

console.log(sub(10.9, 5));

// Arrow Functions
let multiply = (x, y) => x * y;

const printNumbers = (n) => {
    for(let i = 1; i <= n; i++){
        console.log(`Phone number ${i}`);
    };
};
// Arrow functions: was introduced in the ES6 version of javascript, it is used to shorten the code. Here the function keyword is not used but an arrow symbol is used instead.

