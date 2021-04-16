// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

var coinChange = (coins, amount) => {
  coins = coins.sort((a, b) => b - a);
  if (amount === 0) {
    return 0;
  }
  // while amount > largest coin, subtract from amount and counter++
  let counter = 0;
  let current = 0;
  while (current < coins.length) {
    if ((amount - coins[current]) >= 0) {
      amount -= coins[current];
      counter++;
      if (amount === 0) {
        return counter;
      }
    } else {
      current++;
    }
  }
  return -1;
};

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
console.log(coinChange([1,2,5], 11) === 3);
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
console.log(coinChange([2], 3) === -1);

// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
console.log(coinChange([1], 0) === 0);

// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
console.log(coinChange([1], 1) === 1);

// Example 5:

// Input: coins = [1], amount = 2
// Output: 2
console.log(coinChange([1], 2) === 2);
