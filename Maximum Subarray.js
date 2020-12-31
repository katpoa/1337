/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = 0;
        }
        currSum += nums[i];
        if (currSum > maxSum) {
            maxSum = currSum;
        }
    }
    return maxSum;
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
};

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
