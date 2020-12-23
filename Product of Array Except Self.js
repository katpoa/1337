/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [];
    let right = [];
    left[0] = 1;
    right[nums.length - 1] = 1;
    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }
    let products = [];
    for (let i = 0; i < nums.length; i++) {
        products[i] = left[i] * right[i];
    }
    return products;
};

# Python3 solution

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length =len(nums) 
        L, R, products = [0]*length, [0]*length, [0]*length
        L[0], R[length - 1] = 1, 1;
        for i in range(1, length):
            L[i] = L[i - 1] * nums[i - 1]
        for i in reversed(range(length - 1)):
            R[i] = R[i + 1] * nums[i + 1]
        for i in range(length):
            products[i] = L[i] * R[i]
        return products

// constant space

const productExceptSelf = function(nums) {
    let products = [];
    products[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        products[i] = nums[i - 1] * products[i - 1];
    }
    let right = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        products[j] = products[j] * right;
        right *= nums[j];
    }
    return products;
};

# constant space
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length = len(nums)
        products = [0] * length
        products[0] = 1
        for i in range(1, length):
            products[i] = products[i - 1] * nums[i - 1]
        right = 1
        for i in reversed(range(length)):
            products[i] = products[i] * right
            right *= nums[i]
        return products
