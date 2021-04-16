/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = (nums) => {
  let maxSum = nums[0];
  let currSum = 0;
  if (nums.length === 1) {
      return nums[0];
  }
  for (let i = 0; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = 0;
    }
    currSum += nums[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
 };
//     O(n**2) time solution
//     let maxSum;
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             if (maxSum === undefined || sum > maxSum) {
//                 maxSum = sum;
//             }
//         }
//     }
//     return maxSum;
// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]) === 6);

// Example 2:

// Input: nums = [1]
// Output: 1
console.log(maxSubarraySum([1]) === 1);

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
console.log(maxSubarraySum([5,4,-1,7,8]) === 23);


# python solution
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum, currSum = nums[0], 0
        for n in nums:
            if currSum < 0:
                currSum = 0
            currSum += n
            maxSum = max(maxSum, currSum)
        return maxSum
