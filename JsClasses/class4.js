// Using Conditionals
/*
    Syntax:
        if(condition){
            Code block or Execution
        };
        or (with "else" statement to execute a code when the if condition is false.)
        if(condition){
            Code block or Execution
        }else{
            Code block or Execution
        };
        or (with "else if" statements to check for multiple conditions)
         if(condition){
            Code block or Execution;
        } else if(condition){
            Code block or Execution;              
        }else{
            Code block or Execution;
        };
    Write a program that prompts the user for their name and age and then console.log "Hi username you are eligible to vote!" if the user age is greater than or equal 18, and vice versa.
*/
let username = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

// if(userAge >= 18){
//     console.log(`Hi ${username} you are eligible to vote!`)
// }else{
//     console.log(`Sorry ${username} you are not eligible to vote!`)
// };
// Using Ternary Operaators: Syntax: (Condition) ? code execution : code execution;
(userAge >= 18) ? console.log(`Hi ${username} you are eligible to vote!`) : console.log(`Sorry ${username} you are not eligible to vote!`);

/*
    Write a program that takes in the user surname, age, sex(m/f) and according to the users input console.log if the user is a man, boy, girl or woman. 
    e.g "Hi John you are 25yrs Old and you're a man." 
*/
let pname = prompt("Enter Your Name: ");
let age = parseInt(prompt("Enter your age:"));
let gender = prompt("Enter your Gender (m/f):");
// if (age >= 20 && gender == 'm'){
//     console.log(`Hi ${pname}, you are ${age} year's Old and you are a man. `);
// }else if (age < 20 && gender == 'm'){
//     console.log(`Hi ${pname}, you are ${age} year's Old and you are a Boy. `);
// }else if (age >= 20 && gender == 'f'){
//     console.log(`Hi ${pname}, you are ${age} year's Old and you are a Woman.`);
// }else{
//     console.log(`Hi ${pname}, you are ${age} year's old and you are a girl.`);
// };

(age >= 20 && (gender == 'm' || 'M')) ? console.log(`Hi ${pname}, you are ${age} year's Old and you are a man. `) :
(age < 20 && gender == 'm') ? console.log(`Hi ${pname}, you are ${age} year's Old and you are a Boy. `) :
(age >= 20 && gender == 'f') ? console.log(`Hi ${pname}, you are ${age} year's Old and you are a Woman.`) :
console.log(`Hi ${pname}, you are ${age} year's old and you are a girl.`);

console.error("This is an error")
console.warn("This is a warning")

// Using ternary operators, prompt the user to enter his course of study, if the course is science output, hi you are studying a science course, else if its an art output hi you are studying an Art course, else output you are studying some other course. 