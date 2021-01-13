var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let midpoint = left + Math.floor((right - left) / 2);
        if (target === nums[midpoint]) {
            return midpoint;
        }
        if (nums[left] === target) {
            return left;
        }
        if (nums[right] === target) {
            return right;
        }
        if (nums[left] <= nums[midpoint]) {
            if (nums[left] <= target && target <= nums[midpoint]) {
                right = midpoint - 1;
            } else {
                left = midpoint + 1;
            }
        } else {
            if (nums[midpoint] < target && target <= nums[right]) {
                left = midpoint + 1;
            } else {
                right = midpoint - 1;
            }
        }
    }
    return -1;
};
// O(logn)

# Python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return mid
            if nums[left] == target:
                return left
            if nums[right] == target:
                return right
            if nums[left] <= nums[mid]:
                if nums[left] <= target <= nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if nums[right] >= target >= nums[mid]:
                    left = mid + 1
                else: 
                    right = mid - 1
        return -1
