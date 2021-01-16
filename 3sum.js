/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
//     twosum
    let solutions = [];
    nums = nums.sort((a, b) => a - b );
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let currSum = nums[i] + nums[j] + nums[k];
            if (currSum === 0) {
                solutions.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j + 1]) {
                    j++;
                }
                while (nums[k] === nums[k - 1]) {
                    k--;
                }
                j++;
                k--;
            } else if (currSum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return solutions;  
    
};

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        solutions = []
        if len(nums) < 3:
            return solutions
        nums.sort()
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            j = i + 1
            k = len(nums) - 1
            while j < k:
                sum = nums[i] + nums[j] + nums[k]
                if sum == 0:
                    solution = [nums[i], nums[j], nums[k]]
                    solutions.append(solution)
                    while j < k and nums[j] == nums[j + 1]:
                        j += 1
                    while j < k and nums[k] == nums[k - 1]:
                        k -= 1
                    j += 1
                    k -= 1
                elif sum > 0:
                    k -= 1
                else:
                    j += 1
        return solutions
    
