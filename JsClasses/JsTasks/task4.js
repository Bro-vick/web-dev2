
// Reversing a string
let newName = "message";
let revName = "";
for(let i = newName.length - 1; i >= 0; i--){
    revName += newName[i];
}
console.log(revName)

// Two sum algorithm
// Brute Force approach -- Time complexity: O(n^2)
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

// More Optimized solution Time complexity: O(n)
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i];
            }

            prevMap.set(nums[i], i);
        }

        return [];
    }
}