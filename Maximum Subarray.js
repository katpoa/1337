/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (maxSum === undefined || sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
};

# python solution
#***TIMES OUT
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = nums[0]
        for i in range(len(nums)):
            currSum = 0
            for j in range(i, len(nums)):
                currSum += nums[j]
                if (currSum > maxSum):
                    maxSum = currSum
        return maxSum
