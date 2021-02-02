// Write a function which accepts an array of integers and a number n
// the function should calculate the maximum sum of n consecutive elements in the array

function maxSubarraySum(arr, num) {
  // sliding windoow
  if (num > arr.length) {
    return null;
  } 
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let sum = 0;
    for (let j = 0; j < num; j++) {
      sum += arr[i + j];
    }
    if (sum > max) {
      max = temp;
    }
  }
  return max;
}

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let maxSum = 0;
  let currSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  currSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    currSum -= arr[i - num];
    currSum += arr[i];
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    // maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
