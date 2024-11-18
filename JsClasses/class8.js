// Functions In Javascript
/*
    A function is a set statements that take input, do some specific computation and produce output.
    Syntax:
    function functionName(parameter1, parameter2, ...){
        Function Body || Code
        return;
        // Any code after the return statement wouldn't be executed
    };
    When javacript reaches a return statement the function will stop executing and return a value.

    Why do we use functions?
    -- With functions you can reuse code and also write code that can be used many times.
    -- Also you can use the same code with different arguments, to produce different results.

    -- Parameters are placeholderss, for values to be passed into a function when the function is called.
    -- Arguments are values to be passed into a function when the function is called.
*/

// Function Declaration
function addNumbers(num1, num2, num3){
    return num1 + num2 + num3; 
};

// Calling a function
console.log(addNumbers(3, 4, 5));
console.log(addNumbers(30, 45, 59));
console.log(addNumbers(23, 40, 15));


function multiply(num1, num2){
    console.log(num1 * num2)
};

multiply(30, 3);
multiply(30, 4);
multiply(30, 5);

function printTenHw(){
    let i = 1;
    while(i <= 10){
        console.log("How are you!!!", i);
        i++
    };
};

printTenHw();

// Create a function that checks for even numbers, when given an uper limit. It should return the number of even numbers present in the range. i.e CheckEven(10) Output--- There are 6 even numbers in 10.---

function checkEven(upperLimit){
    let even = 0;
    for(let i = 0; i <= upperLimit; i++){
        if(i % 2 == 0){
            even++;
        }else{
            continue;
        };
    };
    console.log(`There are ${even} even numbers in ${upperLimit}!`);
};

checkEven(20);
checkEven(10);
checkEven(100);

