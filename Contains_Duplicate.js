# Python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        dict = {}
        for i in range(len(nums)):
            if nums[i] in dict:
                return True
            dict[nums[i]] = i
        return False

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    if (set.size < nums.length) {
        return true;
    }
    return false;
};
