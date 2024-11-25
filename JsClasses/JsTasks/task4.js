
// Reversing a string
let newName = "message";
let revName = "";
for(let i = newName.length - 1; i >= 0; i--){
    revName += newName[i];
}
console.log(revName)

// Two sum algorithm

let numbers = [2, 1, 4, 5, 8, 6];
console.log(numbers[2] + numbers[5]);

function twoSum(array, target){
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === target){
                return [i, j] 
            };
        }
    };
    return "Sorry target sum not found";
};

console.log(twoSum(numbers, 9));
console.log(twoSum(numbers, 19));