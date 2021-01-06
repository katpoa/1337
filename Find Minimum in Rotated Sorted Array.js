var findMin = function(nums) {
//     find the largest difference?
    let diff = nums[nums.length - 1] - nums[0];
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let currDiff = nums[i] - nums[i + 1]
        if (currDiff > diff && nums[i + 1] < min) {
            diff = currDiff;
            min = nums[i + 1];
        }
    }
    return min;
};

# Python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        diff = nums[len(nums) - 1] - nums[0]
        minEl = nums[0]
        for i in range(len(nums) - 1):
            currDiff = nums[i] - nums[i + 1]
            if currDiff > diff and nums[i + 1] < minEl:
                diff = currDiff
                minEl = nums[i + 1]
        return minEl
