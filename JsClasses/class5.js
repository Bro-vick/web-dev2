// Nullish Coalescing Operator (??) -- This provides a convenient way to handle default values. Default/fallback values can be used when a value is null or undefined, but not for other values like 0, false, "".

const prompt = require('prompt-sync')();
// This is used to make use of propmts on the terminal.
const defaultValue = "Unkown Input";
let age;
const userInput = null ?? defaultValue;
const userAge = age ?? "Unknown Age"; 
console.log("This is your input", userInput, "and", userAge);

// let user = prompt("Who are you?");
// console.log("I am ", user);


// Using Loops In Javascript
/*
    -- We often need to repeat some actions/Executions. Loops are used to repeat the same code multiple times.

    # The "While loop": Is used when we do not know the number of iterations beforehand.
    syntax: 
    while(condition){
        // do some code
        // Iteration (Increment or decrement)
    }
*/
let a = 10;
while(a){
    console.log(`Student Number ${a}`);
    a--;
};
let count = 0;
while(count <= 100){
    console.log(count);
    count +=5;
};

// The "for loop": Is used when we know the number of iterations
/*
    syntax: for(initialization; condition; iteration){
        // Code to be Executed
    }
*/
for(let i = 0; i < 20; i++){
    console.log(`Fruit Number ${i}`);
};
for(let i = 10; i >= 0; i--){
    console.log(`Car Number ${i}`);
};

/*
    The do-while loop: This is very similar to the while loop, except that it executes the block of code at least once.
    syntax: 
    do{
        // Code to be executed
        // Iteration
    }while(condition);
*/
// The random method() in the Math Object is used to get a random number from 0-1 
for(let i = 10; i >= 0; i--){
    console.log(Math.random() * 10);
};


// Nested Loops: This is a loop inside another loop
