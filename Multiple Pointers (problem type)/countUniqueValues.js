// Implement a function which accepts a sorted array and counts the unique values in the array
// (there can be negative numbers, but it will always be sorted)

function countUniqueValues(nums) {
  let left = 0;
  if (nums.length === 0) {
    return 0;
  }
  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
  }
  return left + 1;
}
