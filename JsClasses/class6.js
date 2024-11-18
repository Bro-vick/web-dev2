// The break Statement is used to break out of a loop within the loop
console.log("Effect of Break statement");
for(let i = 1; i  <= 5; i++){
    if(i == 3){
        break;
    }; 
    console.log(i);
};
// The Continue Statement is used to break/skip one statement/code execution and iterate over to the next statement.
// My wonderful students kindly create a loop that prints out numbers from 50 down to 40.
console.log("Effect of Continue statement");
for(n = 50; n >= 40; n--){
    if(n == 44 || n == 41){
        continue;
    }; 
    console.log(n);
};

outer: do{
    let play = confirm("Do you want to play my wonderful game? (yes/no)")
    if(play){
        let answer = Math.floor(Math.random() * 20);
        inner: for(let i = 3; i > 0; i--){
            let guess = prompt("Pick a number from 1-20");
            if (guess > answer){
                console.log("Sorry the number is too big")
            } else if(guess < answer) {
                console.log("Sorry the number is too small")
            }else{
                console.log("Congratulations!!! You guessed correctly.");
                break inner;
            };
        }
       
    }else{
        console.log("Maybe Next Time.");
    }
}while(false);

// Using labels on loops
// A label is an identifier with colon before a loop
/*
    labelName: for (...){

    }
*/
outer: for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if (i === 2 && j === 2 ){
            continue outer; 
            } else{
                console.log(i,j);
            }
        };
};

let result = "";
for(let i = 1; i <= 50; i++){
    if(i % 3 == 0){
        result += "fizz, "
    }else if(i % 5 == 0){
        result += "buzz, "
    }else{
        result += i + ", ";
    }
}
console.log(result);


//  MORE ON LOOPS
// For In loop: This is used to loop through the properties of an object.
const person = {
    name: "Kelechi",
    age: 28,
    gender: "male",
    city: "London"
};
for(let key in person){
    console.log(key, person[key]);
};
// For of Loop: This is used to iterate over the elements of an iterable object e.g arrays, strings, etc.
const fruits = ["mango", "orange", "apple", "grape"];
console.table(fruits);
for(let fruit of fruits){
    console.log("I love ", fruit);
};