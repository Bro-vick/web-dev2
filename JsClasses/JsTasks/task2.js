// Given an integer array nums, create a function called hasDuplicate(nums)  it return true if any value appears more than once in the array, otherwise return false.

// Example 1:
let nums1 = [1, 2, 3, 4, 4]
// Output: true
// Example 2:
let nums2 = [1, 2, 3, 4]
// Output: false

function hasDuplicate(nums){
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1]){
            return true;
        }
    }
    return false;
}
console.log(hasDuplicate(nums1))
console.log(hasDuplicate(nums2))

function hasDuplicate2(nums){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                return true
            }
        }
    }
    return false;
};
console.log(hasDuplicate2(nums1));
console.log(hasDuplicate2(nums2));