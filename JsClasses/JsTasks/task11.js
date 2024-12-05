/*
    ** 3Sum
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
     where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
    The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

    Example 1
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation:
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].

    Example 2:
    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

    Example 3:
    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.
*/
// Two Pointers Solution
function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break; // If the current number is positive, break (no triplet can sum to 0)
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate values for the first element

        let l = i + 1, r = nums.length - 1;

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]); // Found a valid triplet
                l++;
                r--;

                // Skip duplicates for the left and right pointers
                while (l < r && nums[l] === nums[l - 1]) l++;
                while (l < r && nums[r] === nums[r + 1]) r--;
            } else if (sum < 0) {
                l++; // Increase the left pointer to get a larger sum
            } else {
                r--; // Decrease the right pointer to get a smaller sum
            }
        }
    }

    return res;
}

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums))