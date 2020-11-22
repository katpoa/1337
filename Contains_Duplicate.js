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
