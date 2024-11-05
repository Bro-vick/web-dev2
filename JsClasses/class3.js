

// the prompt method returns a string by default
// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter Second number");
// console.log(typeof(num1));
// console.log(parseFloat(num1) + parseInt(num2));
// Type Conversions 
// 1) Implicit type conversion
let num = 10;
let str = '5.676';
console.log(num + str);

// 2) Explicit type conversion
let newNum = Number(str);
console.log(num + newNum);

let dec = 30.567;
let decInt = parseInt(dec);
let dec2 = '20.345';
let decFloat = parseFloat(dec2);

console.log(dec, decInt, dec2, decFloat);

//  Basic Operations In Javascript
// 1)  Arithmetic Operations
let sum = 8 + 5;
let mul = 2 * 2;
let minus = 5 - 2;
let div = 10 / 2;
let rem = 10 % 3; //Modulus -- Remainder of division

console.log(sum, mul, minus, div, rem);

// 2) Assignment Operator (=)
let score = 100;
let color = "green";
let malaria = 5; 

// 3) Increment / Decrement Operators (--, ++)
--malaria; // malaria = malaria - 1; malaria -= 1;
score++;    // score = score + 1; score += 1;
console.log(score);
console.log(malaria);

score += 50;
console.log(score);

malaria *= 2;
console.log(malaria);

score /= 50;
console.log(score);

// 4) Comparison Operators
//  i) Equality (== or ===) i.e loosely and strictly equal to respectively.
let a = 5, b = '5';
console.log(a == b); // true
console.log(a === b); // false
// For example the strict equality checks for both the value and the data type, while the loose checks for just the value.
// let c = 6;
// ii) Inequality (!= or !==)
console.log(a != b); // false
console.log(a !== b); // true

// iii) Relational Operators (>, <, >=, <=)

let gt = 10 > 5,
lt = 10 < 5,
gtoe = 10 >= 5,
ltoe = 10 <= 6;
console.log(gt, lt, gtoe, ltoe);

// Iv) Logical Operators: Logical operators are used on true or false expressions. There are three major logical operators: AND(&&), OR(||), and NOT(!).
let m = true, n = false;
console.log(m && n);
console.log(m || n);
console.log(!m);



