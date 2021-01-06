// Javascript
var maxProduct = function(nums) {
    let maxProduct = nums[0];
    let negMax = 1;
    let currMax = 1;
    for (let i = 0; i < nums.length; i++) {
        let temp = currMax;
        currMax = Math.max(nums[i], Math.max(currMax * nums[i], negMax * nums[i]));
        negMax = Math.min(nums[i], Math.min(temp * nums[i], negMax * nums[i]));
        maxProduct = Math.max(currMax, maxProduct);
    }
    return maxProduct;
}

# Python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        maxProduct = nums[0]
        currMax = 1
        negMax = 1
        for i in range(len(nums)):
            temp = currMax
            currMax = max(nums[i], max(currMax * nums[i], negMax * nums[i]))
            negMax = min(nums[i], min(temp * nums[i], negMax * nums[i]))
            maxProduct = max(currMax, maxProduct)
        return maxProduct
