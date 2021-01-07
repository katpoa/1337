// Binary Search sol'n
// Javascript

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums[right] > nums[left]) {
        return nums[0];
    }
    while (right > left) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};

# Python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        left = 0
        right = len(nums) - 1
        if nums[right] > nums[left]:
            return nums[0]
        while right >= left:
            mid = left + (right - left) // 2
            if nums[mid] > nums[mid + 1]:
                return nums[mid + 1]
            if nums[mid] < nums[mid - 1]:
                return nums[mid]
            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                right = mid - 1

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
